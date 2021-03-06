import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

import { loadState } from 'app/localStorage';



  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  const persistedState = loadState();

  const store = applyMiddleware(thunk, multi)(createStore)(rootReducer, persistedState, devTools);

  /*store.subscribe(throttle(() => {
    const state = store.getState()
    saveState({
      user: state.user,
    })
  }, 1000));*/

  export default store;
