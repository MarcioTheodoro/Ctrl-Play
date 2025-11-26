const express = require('express');

const connectDB = require('./config/config');

const Arrecadacao = require('./models/arrecadacao');

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${PORT} beiiibe!`);
})

async function inicializarCaixaGeral() {
    const caixaExiste = await Arrecadacao.findOne({ nome: 'CaixaGeral' });
    
    if (!caixaExiste) {
        const novaCaixa = new Arrecadacao({ 
            nome: 'CaixaGeral', 
            total: 0 
        });
        await novaCaixa.save();
        console.log('Registro inicial de arrecadação criado (CaixaGeral: 0).');
    }
}

app.get('/total', async (req, res) => {
    try {
        const caixaGeral = await Arrecadacao.findOne({ nome: 'CaixaGeral' });

        if (!caixaGeral) {
            return res.status(404).json({ total: 0, erro: 'CaixaGeral não encontrado' });
        }
        res.json({ total: caixaGeral.total });

    } catch (error) {
        console.error('Erro ao buscar total:', error);
        res.status(500).json({ erro: 'Erro interno do servidor ao buscar o total' });
    }
})

app.post('/depositar', async (req, res) => {
    try {
        const valorDeposito = parseFloat(req.body.valor);

        if (typeof valorDeposito !== 'number' || valorDeposito <= 0) {
            return res.status(400).json({ sucesso: false, mensagem: 'Valor inválido para depósito' });
        }

        const resultado = await Arrecadacao.findOneAndUpdate(
            { nome: 'CaixaGeral' },
            { $inc: { total: valorDeposito } },
            { new: true, upsert: true }
        );

        res.redirect('/depositar.html');
    } catch (error) {
        console.error('Erro ao processar depósito:', error);
        res.status(500).json({ sucesso: false, erro: 'Erro interno do servidor ao depositar' });
    }
});

app.post('/resetar', async (req, res) => {
    try {
        await Arrecadacao.updateOne(
            { nome: 'CaixaGeral' },
            { $set: { total: 0 } }
        );

        console.log('BANCO RESETADO! O total agora é 0.');
        
        res.redirect('/display.html'); 

    } catch (error) {
        console.error('Erro ao resetar o banco:', error);
        res.status(500).send('Falha ao resetar o banco.');
    }
});

inicializarCaixaGeral();