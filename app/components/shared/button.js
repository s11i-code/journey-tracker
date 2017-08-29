import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../styles/theme';

const CustomisedButton = (props) => {
  const buttonStyle = theme[`${props.theme}Button`];
  const textStyle = theme[`${props.theme}ButtonText`];

  return (
    <Button style={[buttonStyle, props.style]} onPress={props.onPress}>
      { props.text ? <Text style={textStyle}>{props.text}</Text> : null}
      { props.icon ? <Icon name={props.icon} size={20} style={[textStyle, { paddingLeft: 6 }]} /> : null}
      { props.children }
    </Button>
  );
};

CustomisedButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node,
  style: PropTypes.shape({}),
  text: PropTypes.string,
  icon: PropTypes.string,
  theme: PropTypes.oneOf(['default', 'subtle']),
};

CustomisedButton.defaultProps = {
  text: null,
  children: null,
  icon: null,
  style: {},
  theme: 'default',
};

export default CustomisedButton;
