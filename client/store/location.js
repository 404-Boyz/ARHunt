import axios from 'axios';

const GET_LOCATION = 'GET_LOCATION';
const GET_ALL_LOCATIONS = 'GET_ALL_LOCATIONS';
const CHANGE_VISITED_STATUS = 'CHANGE_VISITED_STATUS';


// --ACTION CREATORS--
const getLocation = location => ({ type: GET_LOCATION, location })
const getLocations = locations => ({ type: GET_ALL_LOCATIONS, locations })
const changeVisited = visited => ({ type: CHANGE_VISITED_STATUS, visited })

//THUNK CREATORS//

export const getAllLocations = () => dispatch => {
  axios.get('/api/user/:userId/location')
    .then(res => dispatch(getLocations(res.data)))
    .catch(err => console.error(err))
}

export const changeVisitedStatus = (locationId, status) => dispatch => {
  axios.put(`/api/user/:userId/location/${locationId}`, { visited: status })
    .then(res => dispatch(changeVisited(res.data)))
    .catch(err => console.error(err))
}



//  REDUCER ---

export default function (locations = [], action) {
  switch (action.type) {
    case GET_ALL_LOCATIONS:
      return action.locations
    case CHANGE_ACTIVE_STATUS:
      return locations.map((loc) => (action.location.id === loc.id ? action.location : loc))
    case CHANGE_VISITED_STATUS:
      return locations.map((loc) => (action.location.id === loc.id ? action.location : loc))
    default:
      return locations
  }
}
