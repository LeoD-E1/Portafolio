import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import executeStore from './redux/store'
import { Provider } from 'react-redux'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import theme from './configStyles/chakra'

const store = executeStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


