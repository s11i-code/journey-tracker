import * as types from './types';

export const changePage = page => ({
  type: types.CHANGE_PAGE,
  payload: { page },
});

export const setLoading = status => ({
  type: types.SET_LOADING_STATUS,
  payload: status,
});

export * from './locations';
export * from './journeys';
