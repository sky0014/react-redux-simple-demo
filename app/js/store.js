import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducer.js'
import DevTools from './devtool.js';

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
);

const store = createStore(
    reducer,
    {
        isA: false,
        isB: false
    },
    enhancer
);

export default store;