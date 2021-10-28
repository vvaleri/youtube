import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { videoReducer } from './reducers/videoReducer';
import { favouritesReducer } from './reducers/favouritesReducer';

const rootReducer = combineReducers({
  videoReducer,
  favouritesReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
