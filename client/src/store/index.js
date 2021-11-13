import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { videoReducer } from './reducers/videoReducer';
import { favouritesReducer } from './reducers/favouritesReducer';
import { userReducer } from './reducers/userReducer';
import { searchInputReducer } from './reducers/searchInputReducer';

const rootReducer = combineReducers({
  videoReducer,
  favouritesReducer,
  userReducer,
  searchInputReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
