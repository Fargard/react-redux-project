import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// Constants
import { NODE_ENV } from 'src/constants';
// Reducers
import rootReducer from './rootReducer';

export default function configureStore(initialState) {
  const middleware = [thunk];
  let composedEnchancers;
  if (NODE_ENV === 'development') {
    composedEnchancers = composeWithDevTools(applyMiddleware(...middleware));
  } else {
    composedEnchancers = compose(applyMiddleware(...middleware));
  }
  const store = createStore(rootReducer, initialState, composedEnchancers);

  return { store };
}
