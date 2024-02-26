import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import DestinationScreen from '../../../screens/DestinationScreen';
import SearchScreen from '../../../screens/SearchScreen';

const {Screen, Navigator} =
  createNativeStackNavigator<DestinationStackParamList>();

export type DestinationStackParamList = {
  destination: undefined;
  search: undefined;
};

export type DestinationStackNavigationProp<
  RouteName extends keyof DestinationStackParamList,
> = NativeStackNavigationProp<DestinationStackParamList, RouteName>;

export type SuggestionNavigations = {
  [RouteName in keyof DestinationStackParamList]: DestinationStackNavigationProp<RouteName>;
};

export type DestinationStackSuggestions = {
  [RouteName in keyof DestinationStackParamList]: RouteProp<
    DestinationStackParamList,
    RouteName
  >;
};

const DestinationStack: React.FC = () => {
  return (
    <Navigator initialRouteName="search" screenOptions={{headerShown: false}}>
      <Screen name="destination" component={DestinationScreen} />
      <Screen name="search" component={SearchScreen} />
    </Navigator>
  );
};

export default DestinationStack;
