import { devAxios } from './index';


const GET_ADVENTURE = 'GET_ADVENTURE';
const GET_ALL_ADVENTURES = 'GET_ALL_ADVENTURES'
const CHANGE_STATUS = 'CHANGE_STATUS'


// --ACTION CREATORS--
const getAdventure = adventure => ({ type: GET_ADVENTURE, adventure })
const getAdventures = adventures => ({ type: GET_ALL_ADVENTURES, adventures })
const changeStatus = status => ({ type: CHANGE_STATUS, status })


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

export const changeAdventureStatus = (userId, adventureId, status) => dispatch => {
  devAxios.put(`/api/user/${userId}/adventure/${adventureId}`,
    {
      userId: userId,
      id: adventureId,
      status: status
    })
    .then(res => dispatch(changeStatus(res.data)))
    .catch(err => console.error(err))
}


//  REDUCER ---

export default function (adventures = [], action) {
  switch (action.type) {
    case GET_ALL_ADVENTURES:
      return action.adventures
    case GET_ADVENTURE:
      return action.adventure
    case CHANGE_STATUS:
      return adventures.map(adv => (adv.id === action.status.id ? action.status : adv))
    default:
      return adventures
  }
}

