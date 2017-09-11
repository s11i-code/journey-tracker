import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createJourney } from '../../actions';
import { LocationSelector } from '../shared';
import * as propTypes from '../../utils/PropTypes';

class JourneyForm extends Component {
  static get propTypes() {
    return {
      locations: propTypes.locations.isRequired,
      onSelect: PropTypes.func.isRequired,
      requestMade: PropTypes.bool.isRequired,
    };
  }

  static get defaultProps() {
    return {
      locations: [],
    };
  }

  render() {
    const { onSelect, requestMade } = this.props;

    if (requestMade) {
      return <ActivityIndicator />;
    }
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <LocationSelector locations={this.props.locations} onSelect={onSelect} />
      </View>
    );
  }
}


const mapStateToProps = state => ({
  requestMade: state.loading.createJourney,
});

const mapDispatchToProps = dispatch => ({
  onSelect: (originId) => {
    dispatch(createJourney(originId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JourneyForm);
