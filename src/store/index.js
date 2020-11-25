import { createStore } from 'redux';
import workers from 'reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  workers,
  /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
export default store;
