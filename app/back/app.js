// app.js
const express = require('express');
const sequelize = require('./src/config/database');
const pessoaRoutes = require('./src/api/routes/pessoaRoutes');

// Cria o app Express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/api', pessoaRoutes);

// Função para iniciar o servidor
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco estabelecida com sucesso.');

        await sequelize.sync({ force: false });
        console.log('Banco de dados sincronizado.');

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
};

startServer();
