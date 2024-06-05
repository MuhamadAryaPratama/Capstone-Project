import { Sequelize } from "sequelize";

const db = new Sequelize('nusantarasa', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;