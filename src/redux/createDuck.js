/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export default function createDuck(duckOptions) {
  const { initialState, rootSelector, name, actions, effects, selectors } = duckOptions;

  // actons
  const duckActions = {};
  Object.keys(actions).forEach((type) => {
    const actionType = `${name}/${type}`;
    duckActions[type] = (payload) => ({
      payload,
      type: actionType,
    });
    duckActions[type].toString = () => actionType;
    duckActions[type].actionType = actionType;
  });

  // selectors
  const duckSelectors = {};
  const selector = rootSelector || ((state) => state[name]);
  const getDuckState = createSelector([selector], (state) => {
    if (!state) {
      throw new Error(
        `You have a missing reducer for duck: ${name}.${'\n'}Register it in the page's <Provider> component.`
      );
    }
    return state;
  });
  Object.keys(selectors).forEach((type) => {
    duckSelectors[type] = selectors[type](getDuckState, createSelector, duckSelectors);
  });

  // effects
  const duckEffects = {};
  Object.keys(effects).forEach((type) => {
    duckEffects[type] = (payload) => (dispatch, getState) => {
      const effect = effects[type](payload);
      return effect({ dispatch, getState, duckActions, duckEffects, duckSelectors });
    };
  });

  // reducer
  const reducer = (state = initialState, action) => {
    if (action.type.includes(name)) {
      const actionType = action.type.replace(`${name}/`, '');
      const reduce = actions[actionType];
      if (reduce) {
        return reduce(action.payload)(state);
      }
    }
    return state;
  };

  return {
    actions: duckActions,
    effects: duckEffects,
    selectors: duckSelectors,
    reducer,
  };
}
