import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CellActionType } from './actionTypes';
import reducers from './reducers';

const middlewares = [thunk];

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(...middlewares)));

store.dispatch({
  type: CellActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
  },
});

store.dispatch({
  type: CellActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
  },
});

store.dispatch({
  type: CellActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
  },
});

store.dispatch({
  type: CellActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
  },
});
