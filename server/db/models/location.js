const Sequelize = require('sequelize');
const db = require('../db');

const Location = db.define('location', {
  name: Sequelize.STRING,
  clue: Sequelize.STRING,
  description: Sequelize.STRING,
  latitude: Sequelize.DECIMAL,
  longitude: Sequelize.DECIMAL,
  positionInHunt: Sequelize.INTEGER
})

module.exports = Location;
