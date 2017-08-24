import { combineReducers } from 'redux';
import locations from './locations';
import journeys from './journeys';

export default combineReducers({
  locations,
  journeys,
});
