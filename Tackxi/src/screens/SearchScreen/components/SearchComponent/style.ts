import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
  },
  itemInfo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    gap: 5,
  },
  address: {
    fontSize: 12,
    fontWeight: '300',
    color: 'grey',
  },
});
