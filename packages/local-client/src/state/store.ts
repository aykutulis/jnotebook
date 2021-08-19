import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import { persistMiddleware } from './middlewares';

const middlewares = [persistMiddleware, thunk];

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(...middlewares)));
