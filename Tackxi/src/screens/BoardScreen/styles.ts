import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardList: {
    borderWidth: 1,
    padding: 10,
  },
  board: {
    width: 300,
    height: 50,
    borderBottomWidth: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    width: 300,
    height: 100,
    gap: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  empty: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
