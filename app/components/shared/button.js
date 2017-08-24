import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Button from 'apsl-react-native-button';
import theme from '../../styles/theme';

const CustomisedButton = props => (
  <Button style={theme.defaultButton} onPress={props.onPress}>
    { props.text ? <Text style={theme.defaultButtonText}>{props.text}</Text> : null}
    { props.children }
  </Button>
);

CustomisedButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node,
  text: PropTypes.string,
};

CustomisedButton.defaultProps = {
  text: null,
  children: null,
};

export default CustomisedButton;
