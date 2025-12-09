const Sequelize = require("sequelize");


const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Aiven requires this
      },
    },
    logging: false, // disable SQL logs
  }
);

module.exports = sequelize;
