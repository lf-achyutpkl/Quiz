import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './style';

const Button = ({label, onPress, disabled = false}) => (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
    <View style={styles.container}>
      <Text> {label} </Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onPress: PropTypes.func
};

export default Button;
