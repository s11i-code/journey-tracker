import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import moment from 'moment';
import { DeleteJourneyButton, Button, Tile } from '../shared';

const styles = {
  container: {
    flex: 1,
    justifyContent:
    'flex-start',
  },
  tile: {
    marginTop: 40,
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
};

export default class extends Component {
  static get propTypes() {
    return {
      journey: PropTypes.shape({
        id: PropTypes.number.isRequired,
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
        <Tile text={`You started a journey from ${origin.name} at ${startedAgo}.`} style={styles.tile}>
          <View style={styles.buttonArea}>
            <DeleteJourneyButton
              theme='subtle'
              text='Discard'
              icon='trash'
              style={styles.button}
              journeyId={journey.id}
            />
            <Button style={styles.button} text='End Journey' onPress={() => {}} />
          </View>
        </Tile>

      </View>
    );
  }
}
