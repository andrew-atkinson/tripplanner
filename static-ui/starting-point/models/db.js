const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/tripPlanner");

module.exports = db;
