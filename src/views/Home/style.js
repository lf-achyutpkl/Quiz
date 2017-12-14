import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 50 : 0
  }
});
