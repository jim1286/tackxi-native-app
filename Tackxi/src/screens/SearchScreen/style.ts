import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  inputBox: {
    gap: 7,
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'blue',
    paddingLeft: 5,
    paddingRight: 5,
  },
  path: {
    flex: 1,
    padding: 10,
    height: 45,
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
