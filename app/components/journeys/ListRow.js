import React, { Component } from 'react';
import { Text } from 'react-native';
import _ from 'lodash';
import moment from 'moment';
import { DeleteJourneyButton, ListRow } from '../shared';
import theme from '../../styles/theme';
import * as propTypes from '../../utils/PropTypes';

const TEXT_STYLES = {
  color: theme.textColor,
};
const titleStyles = {
  fontWeight: 'bold',
  paddingBottom: 4,
};

const timeDifferenceToString = (before, after) => {
  const diffMs = moment.duration(after.diff(before));
  const diffMins = _.round(diffMs / 3600);
  const diffSecs = _.round((diffMs / 60) % 60);
  return `${diffMins} min ${diffSecs} s`;
};

export default class extends Component {
  static get propTypes() {
    return {
      journey: propTypes.journey.isRequired,
      locations: propTypes.locations.isRequired,
    };
  }

  render() {
    const { journey, locations } = this.props;
    const origin = locations.filter(loc => loc.id === journey.origin_id)[0];
    const dest = locations.filter(loc => loc.id === journey.destination_id)[0];
    const startTime = moment(journey.created_at);
    const timeSinceStart = startTime.fromNow();
    const duration = timeDifferenceToString(startTime, moment(journey.end_time));

    return (
      <ListRow>
        <Text style={TEXT_STYLES}>
          <Text style={titleStyles}>
            {dest ? `${origin.name} to ${dest.name}: ${duration}` : `From ${origin.name} `}
          </Text>
          {'\n'}
          <Text>{ _.capitalize(timeSinceStart) }</Text>
        </Text>
        <DeleteJourneyButton
          style={theme.listRowButton}
          journeyId={journey.id}
          icon='trash'
        />
      </ListRow>);
  }
}
