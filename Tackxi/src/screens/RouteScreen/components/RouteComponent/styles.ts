import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    height: 200,
  },
  body: {
    height: 195,
  },
  bodyHeader: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    height: 65,
  },
  textWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    gap: 10,
    width: '100%',
  },
  route: {
    display: 'flex',
    flexDirection: 'column',
    height: 130,
  },
  rowDivider: {
    height: '50%',
    width: 2,
    backgroundColor: '#d3d3d3',
  },
  columnDivider: {
    height: 5,
    backgroundColor: '#d3d3d3',
  },
});
