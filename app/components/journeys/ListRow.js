import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DeleteJourneyButton, ListRow } from '../shared';
import theme from '../../styles/theme';
import * as propTypes from '../../utils/PropTypes';

const TEXT_STYLES = {
  color: theme.textColor,
  fontSize: 15,
};

const timeDifferenceToString = (before, after) => moment.duration(after.diff(before)).humanize();

export default class extends Component {
  static get propTypes() {
    return {
      journey: propTypes.journey.isRequired,
      locations: propTypes.locations.isRequired,
    };
  }

  static renderStart(origin, journey) {
    const startTime = moment(journey.created_at);

    return <Text>{origin.name} {startTime.fromNow()}  </Text>;
  }

  static renderEnd(destination, journey) {
    const timeDiff = timeDifferenceToString(moment(journey.created_at), moment(journey.end_time));
    return <Text>  {destination.name} ({ timeDiff})</Text>;
  }

  render() {
    const { journey, locations } = this.props;
    const origin = locations.filter(loc => loc.id === journey.origin_id)[0];
    const destination = locations.filter(loc => loc.id === journey.destination_id)[0];
    const deleteButton = (
      <DeleteJourneyButton
        style={theme.listRowButton}
        journeyId={journey.id}
        icon='trash'
      />);

    if (destination) {
      return (
        <ListRow>
          <Text style={TEXT_STYLES}>
            {this.constructor.renderStart(origin, journey)}
            <Icon style={{ paddingVertical: 5 }} name='arrow-right' />
            {this.constructor.renderEnd(origin, journey)}
          </Text>
          {deleteButton}
        </ListRow>);
    }
    return (
      <ListRow>
        <Text style={TEXT_STYLES}>{this.constructor.renderStart(origin, journey)}</Text>
        {deleteButton}
      </ListRow>);
  }
}
