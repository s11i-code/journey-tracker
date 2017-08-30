import { combineReducers } from 'redux';
import locations from './locations';
import journeys from './journeys';
import { SET_LOADING_STATUS } from '../actions/types';

const DEFAULT_LOADING_STATUSES = {
  locations: false,
  journeys: false,
  deleteJourney: false,
  createJourney: false,
};

const loading = (state = DEFAULT_LOADING_STATUSES, action) => {
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
