import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import ListRow from './ListRow';
import * as propTypes from '../../utils/PropTypes';

export default class extends Component {
  static get propTypes() {
    return {
      locations: propTypes.locations.isRequired,
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
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <ListView
          dataSource={this.state.dataSource}
          locations={this.props.locations}
          enableEmptySections
          renderRow={location => (<ListRow location={location} />)}
        />
      </View>
    );
  }
}
