import { devAxios } from './index';

const GET_LOCATION = 'GET_LOCATION';
const GET_ACTIVE_LOCATION = 'GET_ACTIVE_LOCATION'
const GET_ALL_LOCATIONS = 'GET_ALL_LOCATIONS';
const CHANGE_VISITED_STATUS = 'CHANGE_VISITED_STATUS';


// --ACTION CREATORS--
const getLocation = location => ({ type: GET_LOCATION, location })
const getActiveLocation = location => ({ type: GET_ACTIVE_LOCATION, location })
const getLocations = locations => ({ type: GET_ALL_LOCATIONS, locations })
const changeVisited = visited => ({ type: CHANGE_VISITED_STATUS, visited })

//THUNK CREATORS//

export const getAllLocations = (userId, adventureId) => dispatch => {
  devAxios.get(`/api/user/${userId}/adventure/${adventureId}/location`)
    .then(res => dispatch(getLocations(res.data)))
    .catch(err => console.error(err))
}

export const getSingleLocation = (userId, adventureId, locationId) => dispatch => {
  devAxios.get(`/api/user/${userId}/adventure/${adventureId}/location/${locationId}`)
    .then(res => dispatch(getLocation(res.data)))
    .catch(err => console.error(err))
}

export const fetchActiveLocation = (userId, adventureId) => dispatch => {
  devAxios.get(`/api/user/${userId}/adventure/${adventureId}/location/active`)
    .then(res => dispatch(getActiveLocation(res.data)))
    .catch(err => console.error(err))
}

export const changeVisitedStatus = (userId, adventureId, locationId, status) => dispatch => {
  devAxios.put(`/api/user/${userId}/adventure/${adventureId}/location/${locationId}`,
    {
      userId: userId,
      adventureId: adventureId,
      id: locationId,
      visited: status
    })
    .then(res => {
      dispatch(changeVisited({
        userId: userId,
        adventureId: adventureId,
        id: locationId,
        visited: status
      }))
    })
    .catch(err => console.error(err))
}

//  REDUCER ---

export default function (locations = [], action) {
  switch (action.type) {
    case GET_ALL_LOCATIONS:
      return action.locations
    case GET_LOCATION:
      return action.location
    case GET_ACTIVE_LOCATION:
      console.log('GOT HERE!!!', action.location)
      return action.location
    case CHANGE_VISITED_STATUS:
      return action.visited
    default:
      return locations
  }
}
