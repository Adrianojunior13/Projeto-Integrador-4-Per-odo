const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoaController.js');


// Rota para criar uma pessoa (POST /api/pessoas)
router.post('/pessoas', pessoaController.createPessoa);

// Rota para obter todas as pessoas (GET /api/pessoas)
router.get('/pessoas', pessoaController.getAllPessoas);

// Rota para obter uma pessoa por ID (GET /api/pessoas/1)
router.get('/pessoas/:id', pessoaController.getPessoaById);

// Rota para atualizar uma pessoa por ID (PUT /api/pessoas/1)
router.put('/pessoas/:id', pessoaController.updatePessoa);

// Rota para deletar uma pessoa por ID (DELETE /api/pessoas/1)
router.delete('/pessoas/:id', pessoaController.deletePessoa);

module.exports = router;