import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Tile, Modal } from '../shared';
import JourneyForm from './JourneyForm';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      journeyModalOpen: false,
    };
  }

  render() {
    const { journeyModalOpen } = this.state;

    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Tile style={{ marginTop: 120, marginBottom: 40 }}>
          <Text>Track your recurring journeys with Journey Tracker
          to optimise your time.</Text>
        </Tile>
        <Button text='Start Journey ' onPress={() => this.setState({ journeyModalOpen: true })} />
        <Modal title='Start from' visible={journeyModalOpen}>
          <JourneyForm />
        </Modal>
      </View>
    );
  }
}
