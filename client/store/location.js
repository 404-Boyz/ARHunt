import axios from 'axios';

const GET_LOCATION = 'GET_LOCATION';
const GET_ALL_LOCATIONS = 'GET_ALL_LOCATIONS'


// --ACTION CREATORS--
const getLocation = location => ({ type: GET_LOCATION, location })
const getLocations = locations => ({ type: GET_ALL_LOCATIONS, locations })


//THUNK CREATORS//

export const getAllLocations = () => dispatch => {
  axios.get('/api/user/:userId/location')
    .then(res => dispatch(getLocations(res.data)))
    .catch(err => console.error(err))
}

export const getSingleLocation = (locationId) => dispatch => {
  axios.get(`/api/user/:userId/location/${locationId}`)
    .then(res => dispatch(getLocation(res.data)))
    .catch(err => console.error(err))
}


//  REDUCER ---

export default function (locations = [], action) {
  switch (action.type) {
    case GET_ALL_LOCATIONS:
      return action.locations
    case GET_LOCATION:
      return action.location
    default:
      return locations
  }
}