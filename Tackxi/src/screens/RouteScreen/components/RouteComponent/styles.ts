import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    height: 295,
  },
  body: {
    height: 280,
  },
  bodyHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    height: 120,
  },
  textWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    gap: 10,
    width: '100%',
  },
  routeWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%',
    height: 50,
  },
  route: {
    display: 'flex',
    flexDirection: 'column',
    height: 160,
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
