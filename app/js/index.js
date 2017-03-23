import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import * as types from './actionTypes.js';
import store from './store.js';
import App from './app.js';

render(
  <Provider store={ store }>
    <App/>
  </Provider>, $('#root')[0]
);

$('#a-show').click(() => {
  store.dispatch({
    type: types.ACTION_A_CHANGE,
    isA: true
  })
})

$('#a-hide').click(() => {
  store.dispatch({
    type: types.ACTION_A_CHANGE,
    isA: false
  })
})

$('#b-show').click(() => {
  store.dispatch({
    type: types.ACTION_B_CHANGE,
    isB: true
  })
})

$('#b-hide').click(() => {
  store.dispatch({
    type: types.ACTION_B_CHANGE,
    isB: false
  })
})
