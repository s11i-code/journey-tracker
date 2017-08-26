import { FETCH_JOURNEYS, CREATE_JOURNEY } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_JOURNEYS:
      return [...state, ...action.payload];
    case CREATE_JOURNEY:
      return [
        ...state,
        {
          originId: action.originId,
          createdAt: new Date(),
        },
      ];
    default:
      return state;
  }
};
