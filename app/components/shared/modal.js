import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Text, View } from 'react-native';
import theme from '../../styles/theme';

const Component = (props) => {
  const { visible, title, children, onRequestClose } = props;

  return (<View style={{ marginTop: 22 }}>
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={visible}
      onRequestClose={() => onRequestClose}
    >
      <View style={theme.modal}>
        <View>
          { title ? <Text style={theme.modalTitle} >{ title } </Text> : null }
          { children }
        </View>
      </View>
    </Modal>

  </View>);
};

Component.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
};

Component.defaultProps = {
  title: null,
  children: null,
  onRequestClose: () => {},
};
export default Component;
