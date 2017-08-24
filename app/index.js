import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import Layout from './components/shared/layout';
import HomePage from './components/home';

const store = createStore(reducers);

export default () => (
  <Provider store={store}>
    <Layout>
      <HomePage />
    </Layout>
  </Provider>
);
