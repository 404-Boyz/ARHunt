import { devAxios } from './index';


const GET_ADVENTURE = 'GET_ADVENTURE';
const GET_ALL_ADVENTURES = 'GET_ALL_ADVENTURES'


// --ACTION CREATORS--
const getAdventure = adventure => ({ type: GET_ADVENTURE, adventure })
const getAdventures = adventures => ({ type: GET_ALL_ADVENTURES, adventures })


//THUNK CREATORS//

export const getAllAdventures = () => dispatch => {
  devAxios.get('/api/user/:userId/adventure')
    .then(res => dispatch(getAdventures(res.data)))
    .catch(err => console.error(err))
}

export const getSingleAdventure = (adventureId) => dispatch => {
  devAxios.get(`/api/user/:userId/adventure/${adventureId}`)
    .then(res => dispatch(getAdventure(res.data)))
    .catch(err => console.error(err))
}


//  REDUCER ---

export default function (adventures = [], action) {
  switch (action.type) {
    case GET_ALL_ADVENTURES:
      return action.adventures
    case GET_ADVENTURE:
      return action.adventure
    default:
      return adventures
  }
}

