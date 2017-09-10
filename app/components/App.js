import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tabs from 'react-native-tabs';
import theme from '../styles/theme';
import { fetchLocations, fetchJourneys, changePage } from '../actions';
import HomePage from './home';
import JourneysPage from './journeys';
import StartJourneyPage from './startJourney';
import * as propTypes from '../utils/PropTypes';


class App extends Component {
  static get defaultProps() {
    return {
      journeys: [],
      locations: [],
    };
  }

  static get propTypes() {
    return {
      journeys: propTypes.journeys,
      locations: propTypes.locations,
      page: PropTypes.string.isRequired,
      fetchLocations: PropTypes.func.isRequired,
      fetchJourneys: PropTypes.func.isRequired,
      changePage: PropTypes.func.isRequired,
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

  renderPage() {
    const { journeys, locations, page } = this.props;

    switch (page) {
      case 'home':
        return <HomePage {...{ journeys, locations }} />;
      case 'journeys':
        return <JourneysPage {...{ journeys, locations }} />;
      case 'startJourney':
        return <StartJourneyPage {...{ journeys, locations }} />;
      default:
        return <View><Text>Page not found</Text></View>;
    }
  }

  render() {
    const { loading, page } = this.props;

    if (loading.locations || loading.journeys) {
      return (<ActivityIndicator style={{ paddingTop: 40 }} size='large' />);
    }
    return (
      <View style={{ flex: 1 }}>
        { this.renderPage() }
        <Tabs
          selected={page}
          style={theme.tabs}
          selectedStyle={{ borderTopWidth: 2, borderTopColor: 'red', color: theme.accentColor }}
          onSelect={el => this.props.changePage(el.props.name)}
        >
          <Text name='home'>Home</Text>
          <Text name='journeys'>Journeys</Text>
          <Text name='startJourney'>Start Journey</Text>
        </Tabs>

      </View>
    );
  }
}

const mapStateToProps = state =>
  ({
    page: state.page,
    locations: state.locations,
    journeys: state.journeys,
    loading: state.loading,
  })
;

const mapDispatchToProps = dispatch => ({
  fetchLocations: () => {
    dispatch(fetchLocations());
  },
  fetchJourneys: () => {
    dispatch(fetchJourneys());
  },
  changePage: (page) => {
    dispatch(changePage(page));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
