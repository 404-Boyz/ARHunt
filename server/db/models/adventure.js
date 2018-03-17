const Sequelize = require('sequelize');
const db = require('../db');

const Adventure = db.define('adventure', {
  name: Sequelize.STRING
})

module.exports = Adventure;
