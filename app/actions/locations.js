import * as types from './types';
import { LOCATIONS_URL } from '../utils/urls';
import { setLoading } from '.';

/* eslint-disable import/prefer-default-export */

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
