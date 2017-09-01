import React, { Component } from 'react';
import { View } from 'react-native';
import { Modal } from '../shared';
import JourneyForm from './JourneyForm';

export default class extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Modal title='Start from'>
          <JourneyForm />
        </Modal>
      </View>
    );
  }
}
