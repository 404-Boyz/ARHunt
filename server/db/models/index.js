const User = require('./user');
const Location = require('./location');
const Adventure = require('./adventure');

// user id on adventures
Adventure.belongsTo(User)

// adventure id on location

// REVIEW - Is it possible for a location to exist in multiple hunts?
//          If so, this should be belongsToMany
Adventure.hasMany(Location)

module.exports = {
  User,
  Location,
  Adventure
}
