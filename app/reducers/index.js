import { combineReducers } from 'redux';
import locations from './locations';
import journeys from './journeys';
import { SET_LOADING_STATUS } from '../actions/types';

const loading = (state = { locations: false, journeys: false }, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default combineReducers({
  locations,
  journeys,
  loading,
});
