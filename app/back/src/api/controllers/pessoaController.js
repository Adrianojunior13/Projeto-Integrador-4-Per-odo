// src/api/controllers/pessoaController.js
import jwt from "jsonwebtoken";
import Pessoa from "../../database/models/pessoa.js";

// chave secreta (em produção, use variável de ambiente!)
const JWT_SECRET = process.env.JWT_SECRET || "minha_chave_secreta";

// Criar uma nova pessoa
export const createPessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.create(req.body);
    res.status(201).json(pessoa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obter todas as pessoas
export const getAllPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter uma pessoa pelo ID
export const getPessoaById = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(req.params.id);
    if (pessoa) {
      res.status(200).json(pessoa);
    } else {
      res.status(404).json({ message: "Pessoa não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar uma pessoa pelo ID
export const updatePessoa = async (req, res) => {
  try {
    const [updated] = await Pessoa.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedPessoa = await Pessoa.findByPk(req.params.id);
      res.status(200).json(updatedPessoa);
    } else {
      res.status(404).json({ message: "Pessoa não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Deletar uma pessoa pelo ID
export const deletePessoa = async (req, res) => {
  try {
    const deleted = await Pessoa.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Pessoa não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login de pessoa com JWT
export const loginPessoa = async (req, res) => {
  try {
    const { login, senhaHash } = req.body;

    if (!login || !senhaHash) {
      return res.status(400).json({ error: "Login e senha são obrigatórios" });
    }

    const pessoa = await Pessoa.findOne({ where: { login } });

    if (!pessoa) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    if (pessoa.senhaHash !== senhaHash) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    // Gera o token JWT
    const token = jwt.sign(
      { id: pessoa.id, login: pessoa.login },
      JWT_SECRET,
      { expiresIn: "300h" } // expira em 300 horas
    );

    res.status(200).json({
      message: "Login realizado com sucesso",
      token,
      pessoa: {
        id: pessoa.id,
        nome: pessoa.nome,
        login: pessoa.login,
        idade: pessoa.idade,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
