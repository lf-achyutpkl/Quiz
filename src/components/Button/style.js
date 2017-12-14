import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export default StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth
  }
});
