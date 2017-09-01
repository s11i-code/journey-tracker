import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tabs from 'react-native-tabs';
import theme from '../styles/theme';
import { fetchLocations, fetchJourneys } from '../actions';
import HomePage from './home';
import StartJourneyPage from './startJourney';

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
  constructor() {
    super();
    this.state = { page: 'home' };
  }

  componentWillMount() {
    this.props.fetchLocations();
    this.props.fetchJourneys();
  }

  renderPage() {
    const { journeys, locations } = this.props;
    const ongoingJourneys = journeys
      .filter(journey => !journey.destination)
      .sort((j1, j2) => j1.id < j2.id);
    const newestOngoingJourney = ongoingJourneys[0] ? ongoingJourneys[0] : null;

    const { page } = this.state;

    switch (page) {
      case 'home':
        return <HomePage journey={newestOngoingJourney} journeys={journeys} locations={locations} />;
      case 'startJourney':
        return <StartJourneyPage journeys={journeys} locations={locations} />;
      default:
        return <View><Text>Page not found</Text></View>;
    }
  }

  render() {
    const { loading } = this.props;
    const { page } = this.state;

    if (loading.locations || loading.journeys) {
      return (<ActivityIndicator style={{ paddingTop: 40 }} size='large' />);
    }
    return (
      <View style={{ flex: 1 }}>
        { this.renderPage() }
        <Tabs
          selected={page}
          style={theme.tab}
          selectedStyle={{ color: theme.accentColor }}
          onSelect={el => this.setState({ page: el.props.name })}
        >
          <Text name='home'>Home</Text>
          <Text name='startJourney' selectedStyle={{ borderTopWidth: 2, borderTopColor: theme.accentColor }}>Start Journey</Text>
        </Tabs>

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
