import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Picker, View } from 'react-native';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { createJourney } from '../../actions';
import { Button } from '../shared';

class Form extends Component {
  static get defaultProps() {
    return {
      locations: [],
    };
  }

  static get propTypes() {
    return {
      locations: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })),
      onSubmit: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = { locationId: (props.locations[0] || {}).id };
  }

  render() {
    const { locationId } = this.state;
    const { locations, onSubmit } = this.props;

    return (
      <View>
        { locations.length ? (
          <Picker
            selectedValue={locationId}
            onValueChange={id => this.setState({ locationId: id })}
          >
            { locations.map(location => (
              <Picker.Item
                key={shortid.generate()}
                label={location.name}
                value={location.id}
              />)) }
          </Picker>
        ) : null }

        <Button text='GO!' onPress={onSubmit.bind(null, locationId)} />
      </View>);
  }
}


const mapStateToProps = state => ({
  locations: state.locations,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (originId) => {
    dispatch(createJourney(originId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
