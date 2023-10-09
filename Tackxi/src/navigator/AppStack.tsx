import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {BoardStack, AuthStack} from './Stacks';

const {Screen, Navigator} = createNativeStackNavigator<AppStackParamList>();

export type AppStackParamList = {
  authStack: undefined;
  boardStack: undefined;
};

export type AppStackNavigationProp<RouteName extends keyof AppStackParamList> =
  NativeStackNavigationProp<AppStackParamList, RouteName>;

export type AppNavigations = {
  [RouteName in keyof AppStackParamList]: AppStackNavigationProp<RouteName>;
};

export type AppStackRoutes = {
  [RouteName in keyof AppStackParamList]: RouteProp<
    AppStackParamList,
    RouteName
  >;
};

const AppStack: React.FC = () => {
  return (
    <Navigator
      initialRouteName="authStack"
      screenOptions={{headerShown: false}}>
      <Screen name="authStack" component={AuthStack} />
      <Screen name="boardStack" component={BoardStack} />
    </Navigator>
  );
};

export default AppStack;
