import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import AppStack from './navigator';
import {store} from './redux/store';
import {Provider} from 'react-redux';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Provider store={store}>
          <AppStack />
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
