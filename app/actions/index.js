import * as types from './types';

export const createJourney = originId => ({
  type: types.CREATE_JOURNEY,
  originId,
});
