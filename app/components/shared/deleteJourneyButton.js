import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteJourney } from '../../actions';
import { Button } from '.';

class Container extends Component {
  static get defaultProps() {
    return {
      style: {},
      text: null,
      icon: null,
    };
  }

  static get propTypes() {
    return {
      buttonPressed: PropTypes.bool.isRequired,
      journeyId: PropTypes.number.isRequired,
      deleteJourney: PropTypes.func.isRequired,
      style: PropTypes.shape({}),
      icon: PropTypes.string,
      text: PropTypes.string,
    };
  }

  render() {
    const { journeyId, buttonPressed, style, icon, text } = this.props;

    return (
      <Button
        theme='subtle'
        text={text}
        icon={icon}
        loading={buttonPressed}
        style={style}
        onPress={this.props.deleteJourney.bind(null, journeyId)}
      />
    );
  }
}

const mapStateToProps = state => ({
  buttonPressed: state.loading.deleteJourney,
});

const mapDispatchToProps = dispatch => ({
  deleteJourney: (id) => {
    dispatch(deleteJourney(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
