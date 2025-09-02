import { Sequelize } from "sequelize";
import dbConfig from "../../config/database.js";

// Importa os models manualmente
import Pessoa from "./pessoa.js";

const sequelize = new Sequelize(dbConfig);

const db = {};

// Inicializa cada model
db.Pessoa = Pessoa(sequelize, Sequelize.DataTypes);

// Executa associações, se existirem
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
