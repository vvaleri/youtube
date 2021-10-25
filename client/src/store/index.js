import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { videoReducer } from './reducers/videoReducer';

const rootReducer = combineReducers({
  videoReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
