import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Tile } from '../shared';
import EndJourney from './EndJourney';

export default class Container extends Component {
  static get defaultProps() {
    return {
      locations: [],
      journey: null,
    };
  }

  static get propTypes() {
    return {
      locations: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })),
      journey:
        PropTypes.shape({
          name: PropTypes.string,
        }),
    };
  }

  render() {
    const { locations, journey } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Tile
          text='Track your recurring journeys with Journey Tracker
        to optimise your time.'
          style={{ marginTop: 120, marginBottom: 40 }}
        />
        {journey ? <EndJourney locations={locations} journey={journey} /> : null}
      </View>
    );
  }
}
