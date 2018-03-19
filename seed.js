
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
    name: 'The Green Door Tavern',
    clue: 'This establishment opened in 1921, was named for the color of it’s door which indicated the presence of a speakeasy within.',
    latitude: '41.8945938',
    longitude: '-87.63743520000003',
    positionInHunt: 1,
    adventureId: 1,
  },
  {
    name: 'National Public Housing Museum',
    clue: 'A place of stories that mine the vastly complex history of public and publicly subsidized housing in America.',
    latitude: '41.8928203',
    longitude: '-87.6407312',
    positionInHunt: 2,
    adventureId: 1,
  },
  {
    name: 'Ward, A. Montgomery Park',
    clue: 'Sitting on a 3-acre parcel stretching along the north branch of the Chicago River, this park was named in honor of Aaron Montgomery Ward, Chicago’s famous mail order entrepreneur who became known as the “Watchdog of the Lakefront”.',
    latitude: '41.8936415',
    longitude: '-87.6419353',
    positionInHunt: 3,
    adventureId: 1,
  },
  {
    name: 'Jesse White Foundation',
    clue: 'The home to the foundation of the Secretary of State with a mission to support programs benefitting at risk youth and provide educational opportunities for low income students',
    latitude: '41.8969762',
    longitude: '-87.6392664',
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
