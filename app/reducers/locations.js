import { FETCH_LOCATIONS } from '../actions/types';

const MOCK_LOCATIONS_JSON = '[{"id":1,"latitude":60.1515578,"longitude":24.8840869,"name":"Home","created_at":"2017-08-22T13:07:33.172Z","updated_at":"2017-08-22T13:07:33.172Z"},{"id":2,"latitude":60.1663803,"longitude":24.923402615,"name":"Kamppi","created_at":"2017-08-22T13:07:41.594Z","updated_at":"2017-08-22T13:07:41.594Z"}]';
const MOCK_LOCATIONS = JSON.parse(MOCK_LOCATIONS_JSON);

export default (state = MOCK_LOCATIONS, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return state;
    default:
      return state;
  }
};
