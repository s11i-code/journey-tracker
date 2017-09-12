import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView, View, TouchableOpacity, Text } from 'react-native';
import theme from '../../styles/theme';
import { ListRow } from '.';
import * as propTypes from '../../utils/PropTypes';


const TEXT_STYLES = {
  color: theme.textColor,
  fontSize: 15,
};

export default class extends Component {
  static get propTypes() {
    return {
      locations: propTypes.locations.isRequired,
      onSelect: PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      locations: [],
    };
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(props.locations),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.locations),
    });
  }


  render() {
    const { locations, onSelect } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <ListView
          dataSource={this.state.dataSource}
          locations={locations}
          enableEmptySections
          renderRow={location => (
            <ListRow>
              <TouchableOpacity onPress={onSelect.bind(null, location.id)}>
                <Text style={TEXT_STYLES}>
                  {location.name}
                </Text>
              </TouchableOpacity>
            </ListRow>)}
        />
      </View>
    );
  }
}
