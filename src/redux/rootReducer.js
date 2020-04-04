import { combineReducers } from 'redux';

import { reducer as test } from './ducks/test.duck';

const createRootReducer = () =>
  combineReducers({
    test,
  });

export default createRootReducer();
