import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {AddBoardScreen, BoardScreen} from '../../../screens';

const {Screen, Navigator} = createNativeStackNavigator<BoardStackParamList>();

export type BoardStackParamList = {board: undefined; addBoard: undefined};

export type BoardStackNavigationProp<
  RouteName extends keyof BoardStackParamList,
> = NativeStackNavigationProp<BoardStackParamList, RouteName>;

export type BoardNavigations = {
  [RouteName in keyof BoardStackParamList]: BoardStackNavigationProp<RouteName>;
};

export type BoardStackRoutes = {
  [RouteName in keyof BoardStackParamList]: RouteProp<
    BoardStackParamList,
    RouteName
  >;
};

const BoardStack: React.FC = () => {
  return (
    <Navigator initialRouteName="board" screenOptions={{headerShown: false}}>
      <Screen name="board" component={BoardScreen} />
      <Screen name="addBoard" component={AddBoardScreen} />
    </Navigator>
  );
};

export default BoardStack;
