import React from 'react';
import { StatusBar, Text } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // ✅ import this
import Toast from 'react-native-toast-message';

import { store } from './src/redux/Store';
import { navigationRef } from './src/navigation/RootNavigation';
import InitialRouter from './src/navigation/InitialRouter';
import colors from './src/theme/Colors';
import MyLoader from './src/components/MyLoader';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <StatusBar animated backgroundColor={colors.themeColor} />
          <InitialRouter />
          <Toast />
          <MyLoader />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
