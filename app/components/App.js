import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLocations, fetchJourneys } from '../actions';
import StartJourneyPage from './startJourney';
import EndJourneyPage from './endJourney';

class Container extends Component {
  static get defaultProps() {
    return {
      journeys: [],
      locations: [],
    };
  }

  static get propTypes() {
    return {
      journeys: PropTypes.arrayOf(
        PropTypes.shape({
          origin_id: PropTypes.number,
        })),
      locations: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })),
      fetchLocations: PropTypes.func.isRequired,
      fetchJourneys: PropTypes.func.isRequired,
      loading: PropTypes.shape({
        locations: PropTypes.bool.isRequired,
        journeys: PropTypes.bool.isRequired,
      }).isRequired,
    };
  }

  componentWillMount() {
    this.props.fetchLocations();
    this.props.fetchJourneys();
  }

  render() {
    const { journeys, locations, loading } = this.props;
    const ongoingJourneys = journeys.filter(journey => !journey.destination);

    if (loading.locations || loading.journeys) {
      return (<ActivityIndicator style={{ paddingTop: 40 }} size='large' />);
    }
    return (
      <View>
        {ongoingJourneys.length ?
          (<EndJourneyPage locations={locations} journey={ongoingJourneys[0]} />) :
          (<StartJourneyPage {...this.props} />)}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  locations: state.locations,
  journeys: state.journeys,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchLocations: () => {
    dispatch(fetchLocations());
  },
  fetchJourneys: () => {
    dispatch(fetchJourneys());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
