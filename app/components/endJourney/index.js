import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { deleteJourney } from '../../actions';
import { Button, Tile } from '../shared';

const styles = {
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
};

class Container extends Component {
  static get propTypes() {
    return {
      discardPressed: PropTypes.bool.isRequired,
      journey: PropTypes.shape({
        id: PropTypes.number.isRequired,
        origin_id: PropTypes.number.isRequired,
        created_at: PropTypes.string.isRequired,
      }).isRequired,
      locations: PropTypes.array.isRequired,
      deleteJourney: PropTypes.func.isRequired,
    };
  }

  render() {
    const { journey, locations, discardPressed } = this.props;
    const origin = locations.filter(location => location.id === journey.origin_id)[0];
    const startedAgo = moment(journey.created_at).fromNow();

    return (
      <View style={styles.container}>
        <Tile style={styles.tile}>
          <Text>You started a journey from {origin.name} at {startedAgo}.</Text>
        </Tile>
        <View style={styles.buttonArea}>
          <Button
            theme={'subtle'}
            text='Discard'
            icon='trash'
            loading={discardPressed}
            style={styles.button}
            onPress={this.props.deleteJourney.bind(null, journey.id)}
          />
          <Button style={styles.button} text='End Journey' onPress={() => {}} />
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  discardPressed: state.loading.deleteJourney,
});

const mapDispatchToProps = dispatch => ({
  deleteJourney: (id) => {
    dispatch(deleteJourney(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
