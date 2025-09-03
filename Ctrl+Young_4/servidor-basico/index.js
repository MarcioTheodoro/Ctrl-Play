const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200; //Opa, resposta bem-sucedida
        res.setHeader('Content-Type', 'text/plain; charset=utf-8'); //Define o formato da resposta
        res.end('Its, ITS, ITS ALIIIIVEE!');
    } else if (req.url === '/amigos') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Aqui está a lista de seus amigos!');
    } else if (req.url === '/amigo') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Esse é teu amigo?');
    } else if (req.url === '/status') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Você está online!');
    }
    else {
        res.statusCode = 404; //Código de status de para erro
        res.setHeader('Content-Type', 'text/plain'); //Formato da resposta
        res.end('Erro 404: Página não encontrada ;-;');
    }
});

server.listen(2000, () => { console.log('Servidor rodando na porta 2000');});
