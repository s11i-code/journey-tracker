import PropTypes from 'prop-types';

export const location = PropTypes.shape({
  name: PropTypes.string,
});

export const locations = PropTypes.arrayOf(location);

export const journey = PropTypes.shape({
  origin_id: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
  destination_id: PropTypes.number,
  end_time: PropTypes.string,
});

export const journeys = PropTypes.arrayOf(journey);
