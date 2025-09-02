// src/api/routes/pessoaRoutes.js
import express from "express";
import {
  createPessoa,
  getAllPessoas,
  getPessoaById,
  updatePessoa,
  deletePessoa,
  loginPessoa,
} from "../controllers/pessoaController.js";

const router = express.Router();

// Rota para criar uma pessoa (POST /api/pessoas)
router.post("/pessoas", createPessoa);

// Rota para obter todas as pessoas (GET /api/pessoas)
router.get("/pessoas", getAllPessoas);

// Rota para obter uma pessoa por ID (GET /api/pessoas/:id)
router.get("/pessoas/:id", getPessoaById);

// Rota para atualizar uma pessoa por ID (PUT /api/pessoas/:id)
router.put("/pessoas/:id", updatePessoa);

// Rota para deletar uma pessoa por ID (DELETE /api/pessoas/:id)
router.delete("/pessoas/:id", deletePessoa);

// 🚀 Rota de login (POST /api/login)
router.post("/login", loginPessoa);

export default router;
