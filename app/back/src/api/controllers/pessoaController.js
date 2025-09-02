const Pessoa = require('../../database/models/pessoa');
// Criar uma nova pessoa


exports.createPessoa = async (req, res) => {
    try {
        const pessoa = await Pessoa.create(req.body);
        res.status(201).json(pessoa);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Obter todas as pessoas
exports.getAllPessoas = async (req, res) => {
    try {
        const pessoas = await Pessoa.findAll();
        res.status(200).json(pessoas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Obter uma pessoa pelo ID
exports.getPessoaById = async (req, res) => {
    try {
        const pessoa = await Pessoa.findByPk(req.params.id);
        if (pessoa) {
            res.status(200).json(pessoa);
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Atualizar uma pessoa pelo ID
exports.updatePessoa = async (req, res) => {
    try {
        const [updated] = await Pessoa.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPessoa = await Pessoa.findByPk(req.params.id);
            res.status(200).json(updatedPessoa);

        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Deletar uma pessoa pelo ID
exports.deletePessoa = async (req, res) => {
    try {
        const deleted = await Pessoa.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send(); // 204 No Content
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};