import React from 'react';
import { Provider } from 'react-native-paper';
import { Routers } from './src/route/router';

const App = () => {
  return (
    <Provider>
      <Routers />
    </Provider>
  );
};

export default App;
