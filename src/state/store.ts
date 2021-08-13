import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ActionType } from './actionTypes';
import reducers from './reducers';

const middlewares = [thunk];

export const store = createStore(reducers, {}, applyMiddleware(...middlewares));

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
  },
});
