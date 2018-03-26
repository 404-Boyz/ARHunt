'use strict'
import { Location } from 'expo';
let positionTracker = null;

// ACTION TYPES

const UPDATED_POSITION = 'UPDATED_POSITION';
const STOP_TRACKING = 'STOP_TRACKING';


// ACTION CREATORS

export const getUpdatedPosition = position => ({ type: UPDATED_POSITION, position });
export const stopTracking = () => ({ type: STOP_TRACKING });


// THUNK CREATORS

export const getCurrentPosition = () => dispatch => {
    clearInterval(positionTracker);
    positionTracker = setInterval(() => {
        Location.getCurrentPositionAsync({ enableHighAccuracy: true })
            .then(res => dispatch(getUpdatedPosition({ latitude: res.coords.latitude, longitude: res.coords.longitude })))
            .catch(err => console.error(err))
    }, 3000);
};


// REDUCERS

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATED_POSITION:
            return { ...state, latitude: action.position.latitude, longitude: action.position.longitude };
        case STOP_TRACKING:
            clearInterval(positionTracker);
            return { ...state };
        default:
            return state
    }
};
