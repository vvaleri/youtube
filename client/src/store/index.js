import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { videoReducer } from './reducers/videoReducer';
import { favouritesReducer } from './reducers/favouritesReducer';
import { userReducer } from './reducers/userReducer';
import { searchInputReducer } from './reducers/searchInputReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  videoReducer,
  favouritesReducer,
  userReducer,
  searchInputReducer
});

export const history = createBrowserHistory();

export const store = createStore(rootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  ));
