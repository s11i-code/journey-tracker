import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import theme from '../../styles/theme';

const ListRow = props => (
  <View style={[theme.listRow, props.style]}>
    {props.children}
  </View>
);

ListRow.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape({}),
};

ListRow.defaultProps = {
  style: {},
  text: null,
  children: null,
};

export default ListRow;
