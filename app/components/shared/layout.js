import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import customTheme from '../../styles/theme';

const Layout = props => (

  <View style={customTheme.layout}>
    <View style={customTheme.heading}>
      <Text style={customTheme.headingText}>Journey Tracker</Text>
    </View>
    <View style={customTheme.content}>
      { props.children }
    </View>
  </View>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
