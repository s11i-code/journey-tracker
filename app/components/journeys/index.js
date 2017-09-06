import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import * as propTypes from '../../utils/PropTypes';
import theme from '../../styles/theme';
import ListRow from './ListRow';

export default class extends Component {
  static get propTypes() {
    return {
      journeys: propTypes.journeys.isRequired,
      locations: propTypes.locations.isRequired,
    };
  }

  static get defaultProps() {
    return {
      journeys: [],
      locations: [],
    };
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(props.journeys),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.journeys),
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <ListView
          dataSource={this.state.dataSource}
          locations={this.props.locations}
          enableEmptySections
          renderRow={journey => (
            <ListRow style={theme.listItem} journey={journey} locations={this.props.locations} />
          )}
        />
      </View>

    );
  }
}
