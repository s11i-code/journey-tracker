import React from 'react';
import { View, Text } from 'react-native';
import { Button, Tile } from '../shared';

export default () => (
  <View style={{ flex: 1, justifyContent: 'flex-start' }}>
    <Tile style={{ marginTop: 120, marginBottom: 40 }}>
      <Text>Tracking your recurring journeys with Journey Tracker
      to know your optimal travel method.</Text>
    </Tile>
    <Button text='Start Journey' />
  </View>
);
