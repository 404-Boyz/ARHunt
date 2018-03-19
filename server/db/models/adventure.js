const Sequelize = require('sequelize');
const db = require('../db');

const Adventure = db.define('adventure', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  locationCount: Sequelize.INTEGER,
  photoUrl: Sequelize.STRING
})

module.exports = Adventure;
