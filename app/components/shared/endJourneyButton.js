import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { endJourney } from '../../actions';
import * as propTypes from '../../utils/PropTypes';
import { Button, Modal, LocationSelector } from '.';

class EndJourneyButton extends Component {
  static get defaultProps() {
    return {
      style: {},
      icon: null,
    };
  }

  static get propTypes() {
    return {
      buttonPressed: PropTypes.bool.isRequired,
      journeyId: PropTypes.number.isRequired,
      endJourney: PropTypes.func.isRequired,
      style: PropTypes.shape({}),
      icon: PropTypes.string,
      locations: propTypes.locations.isRequired,
    };
  }

  constructor() {
    super();
    this.state = {
      showLocationModal: false,
    };
  }

  render() {
    const { journeyId, buttonPressed, style, icon, locations } = this.props;
    const { showLocationModal } = this.state;
    return (
      <View>
        <Button
          text='End journey'
          icon={icon}
          loading={buttonPressed}
          style={style}
          onPress={() => this.setState({ showLocationModal: true })}
        />
        <Modal title='Select end point' visible={showLocationModal}>
          <LocationSelector
            locations={locations}
            onSelect={this.props.endJourney.bind(null, journeyId)}
          />
        </Modal>
      </View>

    );
  }
}

const mapStateToProps = state => ({
  locations: state.locations,
  buttonPressed: state.loading.endJourney,
});

const mapDispatchToProps = dispatch => ({
  endJourney: (id, destinationId) => {
    dispatch(endJourney(id, destinationId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EndJourneyButton);
