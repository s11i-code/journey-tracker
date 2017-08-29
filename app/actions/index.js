import * as types from './types';
import { JOURNEYS_URL, LOCATIONS_URL } from '../utils/urls';

export const fetchJourneys = () => dispatch => (
  fetch(JOURNEYS_URL)
    .then(res => res.json())
    .then((journeys) => {
      dispatch({
        type: types.FETCH_JOURNEYS,
        payload: journeys,
      });
    })
);


export const fetchLocations = () => dispatch => (
  fetch(LOCATIONS_URL)
    .then(res => res.json())
    .then((locations) => {
      dispatch({
        type: types.FETCH_LOCATIONS,
        payload: locations,
      });
    })
);

export const createJourney = originId => dispatch => (
  fetch(JOURNEYS_URL,
    { headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ journey: { origin_id: originId } }),
    })
    .then(res => res.json())
    .then((journey) => {
      dispatch({
        type: types.CREATE_JOURNEY,
        payload: journey,
      });
    })
);
