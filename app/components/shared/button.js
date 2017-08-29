import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Button from 'apsl-react-native-button';
import theme from '../../styles/theme';

const CustomisedButton = (props) => {
  const buttonStyle = theme[`${props.theme}Button`];
  const textStyle = theme[`${props.theme}ButtonText`];

  return (
    <Button style={[buttonStyle, props.style]} onPress={props.onPress}>
      { props.text ? <Text style={textStyle}>{props.text}</Text> : null}
      { props.children }
    </Button>
  );
};

CustomisedButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node,
  style: PropTypes.shape({}),
  text: PropTypes.string,
  theme: PropTypes.oneOf(['default', 'subtle']),
};

CustomisedButton.defaultProps = {
  text: null,
  children: null,
  style: {},
  theme: 'default',
};

export default CustomisedButton;
