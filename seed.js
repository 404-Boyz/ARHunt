
const Sequelize = require('sequelize');
const { User, Adventure, Location } = require('./server/db/models');
const db = require('./server/db');


const users = [
  {
    firstName: 'Wanderer',
    lastName: 'Whit',
    userName: 'wackywhit',
    email: 'whit@gmail.com',
    password: 'pirates',
    googleID: 'askjeeves',
  },
  {
    firstName: 'Blue',
    lastName: 'Beard',
    username: 'pirate',
    email: 'bluebeard@gmail.com',
    password: 'pirates',
    googleID: 'crossbones',
  }
];

const adventures = [
  {
    name: 'Shall we begin?',
    description: 'Get lost with the 404-Boyz!',
    locationCount: 4,
    photoUrl: 'https://media.sabrecdn.com/wyndhamchicago/application/files/5414/7437/1155/int-push_Chicago.jpg',
    userId: 1
  },

]

const locations = [
  {
    name: 'first location',
    clue: '1st',
    description: '1st',
    latitude: '41.895266',
    longitude: '-87.639035',
    positionInHunt: 1,
    adventureId: 1,
  },
  {
    name: 'second location',
    clue: '2nd',
    description: '2nd',
    latitude: '41.892294',
    longitude: '-87.626920',
    positionInHunt: 2,
    adventureId: 1,
  },
  {
    name: 'third location',
    clue: '3rd',
    description: '3rd',
    latitude: '41.878876',
    longitude: '-87.635915',
    positionInHunt: 3,
    adventureId: 1,
  },
  {
    name: 'fourth location',
    clue: '4th',
    description: '4th',
    latitude: '41.875794',
    longitude: '-87.618948',
    positionInHunt: 4,
    adventureId: 1,
  }
];

const seed = () =>
  Promise.all(users.map(user =>
    User.create(user))
  )
    .then(() =>
      Promise.all(adventures.map(adventure =>
        Adventure.create(adventure))
      ))
    .then(() =>
      Promise.all(locations.map(location =>
        Location.create(location))
      )
    )
    .catch(err => console.error(err))

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding database...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
