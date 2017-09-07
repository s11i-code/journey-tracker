import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { createJourney } from '../../actions';
import { ListRow } from '../shared';
import theme from '../../styles/theme';
import * as propTypes from '../../utils/PropTypes';

const TEXT_STYLES = {
  color: theme.textColor,
  fontSize: 15,
};

class LocationListRow extends Component {
  static get propTypes() {
    return {
      location: propTypes.location.isRequired,
      onSelect: PropTypes.func.isRequired,
      requestMade: PropTypes.bool.isRequired,
    };
  }

  render() {
    const { location, onSelect, requestMade } = this.props;

    if (requestMade) {
      return <ActivityIndicator />;
    }
    return (
      <ListRow>
        <TouchableOpacity onPress={onSelect.bind(null, location.id)}>
          <Text style={TEXT_STYLES}>
            {location.name}
          </Text>
        </TouchableOpacity>
      </ListRow>);
  }
}

const mapStateToProps = state => ({
  locations: state.locations,
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
)(LocationListRow);
