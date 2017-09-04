import * as types from './types';
import { JOURNEYS_URL, LOCATIONS_URL } from '../utils/urls';

export const changePage = page => ({
  type: types.CHANGE_PAGE,
  payload: { page },
});

export const setLoading = status => ({
  type: types.SET_LOADING_STATUS,
  payload: status,
});

export const fetchJourneys = () => (dispatch) => {
  dispatch(setLoading({ journeys: true }));

  return (
    fetch(JOURNEYS_URL)
      .then(res => res.json())
      .then((journeys) => {
        dispatch(setLoading({ journeys: false }));

        dispatch({
          type: types.FETCH_JOURNEYS,
          payload: journeys,
        });
      })
  );
};

export const fetchLocations = () => (dispatch) => {
  dispatch(setLoading({ locations: true }));
  return (
    fetch(LOCATIONS_URL)
      .then(res => res.json())
      .then((locations) => {
        dispatch(setLoading({ locations: false }));
        dispatch({
          type: types.FETCH_LOCATIONS,
          payload: locations,
        });
      })
  );
};

export const createJourney = originId => (dispatch) => {
  dispatch(setLoading({ journeys: true }));

  return (
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
        dispatch(setLoading({ journeys: false }));
        dispatch(changePage('home'));
      })

  );
};

export const deleteJourney = id => (dispatch) => {
  dispatch(setLoading({ deleteJourney: true }));
  return (
    fetch(`${JOURNEYS_URL}/${id}`,
      { headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
      })
      .then(() => {
        dispatch(setLoading({ deleteJourney: false }));
        dispatch({
          type: types.DELETE_JOURNEY,
          payload: { id },
        });
      })

  );
};
