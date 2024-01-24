import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import AppStack from './navigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
