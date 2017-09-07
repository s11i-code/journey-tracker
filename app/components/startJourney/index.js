import React, { Component } from 'react';
import { View, Text } from 'react-native';
import theme from '../../styles/theme';
import JourneyForm from './JourneyForm';

export default class extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Text style={[theme.title, { paddingVertical: 30 }]}>Select starting point:</Text>
        <JourneyForm {...this.props} />
      </View>
    );
  }
}
