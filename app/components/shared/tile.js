import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import theme from '../../styles/theme';

const Tile = props => (
  <View style={[theme.tile, props.style]}>
    {props.text ? <Text style={theme.tileText}>{props.text}</Text> : null}
    {props.children}
  </View>

);

Tile.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape({}),
  text: React.PropTypes.string,
};

Tile.defaultProps = {
  style: {},
  text: null,
  children: null,
};
export default Tile;
