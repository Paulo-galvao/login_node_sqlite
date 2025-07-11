import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  host: "localhost",
  storage: './database.db',
});

export default sequelize;