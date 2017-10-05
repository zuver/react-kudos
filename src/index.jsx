import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from './containers/App';

import store from './store';

// Import custom CSS
import './styles.css';

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
