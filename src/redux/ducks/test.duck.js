import createDuck from 'src/redux/createDuck';

const duckOptions = {
  name: 'test',
  initialState: {
    message: 'Hello!',
    error: '',
  },
  actions: {
    setMessageSuccess: (message) => (state) => ({
      ...state,
      message,
    }),
    setMessageFailure: (error) => (state) => ({
      ...state,
      error,
    }),
  },
  effects: {
    setMessage: () => async ({ dispatch, duckActions }) => {
      try {
        const message = 'Yay!!!';
        dispatch(duckActions.setMessageSuccess(message));
      } catch (error) {
        dispatch(duckActions.setMessageFailure(error));
      }
    },
  },
  selectors: {
    getMessage: (getState, createSelector) => createSelector([getState], (state) => state.message),
    getError: (getState, createSelector) => createSelector([getState], (state) => state.error),
  },
};

export const { actions, selectors, effects, reducer } = createDuck(duckOptions);
