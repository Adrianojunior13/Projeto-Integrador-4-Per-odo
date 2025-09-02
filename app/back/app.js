// app.js
import express from "express";
import sequelize from "./src/config/database.js";
import pessoaRoutes from "./src/api/routes/pessoaRoutes.js";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use("/api", pessoaRoutes);

// garante sincronização com banco
sequelize.sync()
  .then(() => {
    console.log("Banco sincronizado com sucesso!");
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao sincronizar o banco:", err);
  });
