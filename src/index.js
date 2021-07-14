import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import appStore from './store/appStore'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import theme from './configStyles/chakra'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


