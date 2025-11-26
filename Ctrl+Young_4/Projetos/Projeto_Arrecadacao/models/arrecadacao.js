const mongoose = require('mongoose');
const arrecadacaoSchema = new mongoose.Schema({
    total: {
        type: Number,
        required: true,
        default: 0
    },
    nome: {
        type: String,
        required: true
    }
});

const Arrecadacao = mongoose.model('Arrecadacao', arrecadacaoSchema);

module.exports = Arrecadacao;