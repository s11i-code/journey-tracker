import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Tile, Modal } from '../shared';
import JourneyForm from './JourneyForm';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      journeyModalOpen: false,
    };
  }

  render() {
    const { journeyModalOpen } = this.state;
    console.warn('journeys: ', JSON.stringify(this.props.journeys));

    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Tile style={{ marginTop: 120, marginBottom: 40 }}>
          <Text>Track your recurring journeys with Journey Tracker
          to optimise time spent.</Text>
        </Tile>
        <Button text='Start Journey ' onPress={() => this.setState({ journeyModalOpen: true })} />
        <Modal title='Start from' visible={journeyModalOpen}>
          <JourneyForm />
        </Modal>
      </View>
    );
  }
}

Container.propTypes = {
  journeys: PropTypes.arrayOf(
    PropTypes.shape({
      originId: PropTypes.number,
    })),
};

Container.defaultProps = {
  journeys: [],
};

const mapStateToProps = state => ({
  journeys: state.journeys,
});

export default connect(
  mapStateToProps,
  null,
)(Container);
