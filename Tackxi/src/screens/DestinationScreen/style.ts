import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    gap: 7,
    borderWidth: 1,
    borderRadius: 10,
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'blue',
  },
  path: {
    height: 45,
    padding: 10,
    width: '80%',
  },
  icon: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
