import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Layout from './components/shared/layout';
import App from './components/App';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default () => (
  <Provider store={store}>
    <Layout>
      <App />
    </Layout>
  </Provider>
);
