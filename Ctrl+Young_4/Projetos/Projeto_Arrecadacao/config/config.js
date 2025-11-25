const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/projetoArrecadacao');
        console.log('Epa, MongoDB conectou hein!');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB: ', err);
        process.exit(1);
    }
};

module.exports = connectDB;