import { FETCH_JOURNEYS, CREATE_JOURNEY, DELETE_JOURNEY } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_JOURNEYS:
      return [...state, ...action.payload];
    case CREATE_JOURNEY:
      return [
        action.payload.journey,
        ...state,
      ];
    case DELETE_JOURNEY:
      return state.filter(journey => journey.id !== action.payload.id);
    default:
      return state;
  }
};
