import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    width: 300,
    height: 80,
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  info: {
    width: '80%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  deleteIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
