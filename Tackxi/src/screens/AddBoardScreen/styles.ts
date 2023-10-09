import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBoard: {
    width: '70%',
    height: ' 50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  board: {
    width: '80%',
    height: 30,
    borderWidth: 1,
    marginRight: 5,
  },
});
