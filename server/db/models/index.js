const User = require('./user');
const Location = require('./location');
const Adventure = require('./adventure');

// user id on adventures
Adventure.belongsTo(User)

// adventure id on location
Adventure.hasMany(Location)

module.exports = {
  User,
  Location,
  Adventure
}
