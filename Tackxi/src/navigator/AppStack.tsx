import React, {useEffect, useState} from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {AuthStack, TransportationStack, SuggestionStack} from './Stacks';
import {TokenService} from '../service';
import UserStore from '../stores/UserStore/UserStore';
import {User} from '../interface';

const {Screen, Navigator} = createNativeStackNavigator<AppStackParamList>();

export type AppStackParamList = {
  authStack: undefined;
  transportationStack: undefined;
  suggestionStack: undefined;
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
  // const {user} = UserStore();
  // const [isAuth, setIsAuth] = useState<boolean>(false);

  // useEffect(() => {
  //   initAuth(user);
  // }, [user]);

  // const initAuth = async (me: User | null) => {
  //   const tokens = await TokenService.getTokens();
  //   const checkAuth = tokens?.accessToken && me;

  //   if (checkAuth) {
  //     setIsAuth(true);
  //     return;
  //   }

  //   setIsAuth(false);
  // };

  return (
    <Navigator
      initialRouteName="authStack"
      screenOptions={{headerShown: false}}>
      <Screen name="authStack" component={AuthStack} />
      <Screen name="transportationStack" component={TransportationStack} />
      <Screen name="suggestionStack" component={SuggestionStack} />
    </Navigator>
  );
};

export default AppStack;
