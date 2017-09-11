import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Text } from 'react-native';
import Layout from './layout';
import theme from '../../styles/theme';

const Component = (props) => {
  const { visible, title, children, onRequestClose } = props;

  return (
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={visible}
      onRequestClose={() => onRequestClose}
    >
      <Layout>
        { title ? <Text style={[theme.title, { marginVertical: 40 }]} >{ title } </Text> : null }
        { children }
      </Layout>
    </Modal>
  );
};

Component.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
};

Component.defaultProps = {
  title: null,
  children: null,
  visible: false,
  onRequestClose: () => {},
};
export default Component;
