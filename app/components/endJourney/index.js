import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import { Button, Tile } from '../shared';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:
    'flex-start',
  },
  tile: {
    marginTop: 120,
    marginBottom: 40,
    flex: 2,
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    width: 250,
    marginHorizontal: 2,
  },
});

export default class extends Component {
  static get propTypes() {
    return {
      journey: PropTypes.shape({
        origin_id: PropTypes.number.isRequired,
        created_at: PropTypes.string.isRequired,
      }).isRequired,
      locations: PropTypes.array.isRequired,
    };
  }

  render() {
    const { journey, locations } = this.props;
    const origin = locations.filter(location => location.id === journey.origin_id)[0];
    const startedAgo = moment(journey.created_at).fromNow();

    return (
      <View style={styles.container}>
        <Tile style={styles.tile}>
          <Text>You started a journey from {origin.name} at {startedAgo}.</Text>
        </Tile>
        <View style={styles.buttonArea}>
          <Button theme={'subtle'} style={styles.button} text='Discard' onPress={() => {}} />
          <Button style={styles.button} text='End Journey' onPress={() => {}} />
        </View>
      </View>
    );
  }
}
