import axios from 'axios';
import { devAxios } from './index'

const GET_ALL_LOCATIONS = 'GET_ALL_LOCATIONS';
const CHANGE_VISITED_STATUS = 'CHANGE_VISITED_STATUS';


// --ACTION CREATORS--
const getLocations = locations => ({ type: GET_ALL_LOCATIONS, locations })
const changeVisited = location => ({ type: CHANGE_VISITED_STATUS, location })


//THUNK CREATORS//

export const getAllLocations = (userId, adventureId) => dispatch => {
  devAxios.get(`/api/user/${userId}/adventure/${adventureId}/location`)
    .then(res => dispatch(getLocations(res.data)))
    .catch(err => console.error(err))
}


export const changeVisitedStatus = (userId, adventureId, locationId) => dispatch => {
  devAxios.put(`/api/user/${userId}/adventure/${adventureId}/location/${locationId}/visited`,
    {
      userId: userId,
      adventureId: adventureId,
      id: locationId,
      visited: true
    })
    .then(res => {
      console.log(res);
      dispatch(changeVisited(res.data))
    })
    .catch(err => console.error(err))
}

//  REDUCER ---

export default function (locations = [], action) {
  switch (action.type) {
    case GET_ALL_LOCATIONS:
      return action.locations
    case CHANGE_VISITED_STATUS:
      return locations.map((loc) => (action.location.id === loc.id ? action.location : loc))
    default:
      return locations
  }
}
