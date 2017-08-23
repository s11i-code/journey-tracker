import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Picker, View } from 'react-native';
import { Button } from '../shared';
import shortid from 'shortid';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { locationId: props.locations[0].id };
  }

  render() {
    const { locationId } = this.state;
    const { locations } = this.props;
    return (
      <View>
        <Picker
          selectedValue={locationId}
          onValueChange={id => this.setState({ locationId: id })}
        >
          { locations.map(location => <Picker.Item key={shortid.generate()} label={location.name} value={location.id} />) }

        </Picker>
        <Button text='GO!' />
      </View>);
  }
}

Form.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

Form.defaultProps = {
  locations: JSON.parse('[{"id":1,"latitude":60.1515578,"longitude":24.8840869,"name":"Home","created_at":"2017-08-22T13:07:33.172Z","updated_at":"2017-08-22T13:07:33.172Z"},{"id":2,"latitude":60.1663803,"longitude":24.923402615,"name":"Kamppi","created_at":"2017-08-22T13:07:41.594Z","updated_at":"2017-08-22T13:07:41.594Z"}]'),
};

export default Form;
