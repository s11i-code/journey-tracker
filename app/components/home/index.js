import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Tile, Button } from '../shared';
import { changePage } from '../../actions';
import * as propTypes from '../../utils/PropTypes';
import EndJourney from './EndJourney';


const getFeaturedJourney = (journeys) => {
  const twoHoursAgo = moment().subtract(2, 'hours');

  const recentJourneys = journeys
    .filter(journey => moment(journey.created_at).isAfter(twoHoursAgo) && !journey.destination);
  return recentJourneys.length ? recentJourneys[0] : null;
};

class HomePage extends Component {
  static get defaultProps() {
    return {
      locations: [],
      journeys: [],
      journey: null,
    };
  }

  static get propTypes() {
    return {
      locations: propTypes.locations,
      journeys: propTypes.journeys,
      changePage: PropTypes.func.isRequired,
    };
  }

  render() {
    const { locations, journeys } = this.props;
    const featuredJourney = getFeaturedJourney(journeys);

    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Tile
          text='Track your recurring journeys with Journey Tracker
        to optimise your time.'
          style={{ marginTop: 120, marginBottom: 40 }}
        />
        {featuredJourney ? (
          <EndJourney
            locations={locations}
            journey={featuredJourney}
          />) :
          (<Button
            text='Start journey'
            style={{ marginHorizontal: 20 }}
            onPress={() => this.props.changePage('startJourney')}
          />)}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changePage: (page) => {
    dispatch(changePage(page));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(HomePage);
