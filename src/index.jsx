import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
// Store
import configureStore from 'src/redux/configureStore';
// Styles
import { theme, GlobalStyles } from 'src/styles';
// Routes
import Routes from 'src/routes';

const { store } = configureStore();
const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

const rootElement = document.getElementById('app');

render(<App />, rootElement);
