import { FETCH_JOURNEYS, CREATE_JOURNEY, DELETE_JOURNEY } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_JOURNEYS:
      return [...state, ...action.payload.sort((j1, j2) => j1.id > j2.id)];
    case CREATE_JOURNEY:
      return [
        ...state,
        {
          originId: action.originId,
          createdAt: new Date(),
        },
      ];
    case DELETE_JOURNEY:
      return state.filter(journey => journey.id !== action.payload.id);
    default:
      return state;
  }
};
