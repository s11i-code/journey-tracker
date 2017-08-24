import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import theme from '../../styles/theme';

const Tile = props => (

  <View style={[theme.tile, props.style]}>
    <Text style={theme.tileText}> {props.children} </Text>
  </View>

);

Tile.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
};

Tile.defaultProps = {
  style: {},
};
export default Tile;
