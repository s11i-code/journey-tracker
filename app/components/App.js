import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions';
import HomePage from './home';

class Container extends Component {
  static get defaultProps() {
    return {
      journeys: [],
    };
  }

  static get propTypes() {
    return {
      journeys: PropTypes.arrayOf(
        PropTypes.shape({
          originId: PropTypes.number,
        })),
      fetchLocations: PropTypes.func.isRequired,
    };
  }

  componentWillMount() {
    this.props.fetchLocations();
  }

  render() {
    return (
      <View><HomePage {...this.props} /></View>
    );
  }
}

const mapStateToProps = state => ({
  journeys: state.journeys,
});

const mapDispatchToProps = dispatch => ({
  fetchLocations: () => {
    dispatch(fetchLocations());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
