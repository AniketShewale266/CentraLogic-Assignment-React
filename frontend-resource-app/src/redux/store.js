import { combineReducers, createStore } from 'redux';
import categoryReducer from './categoryReducer';
import favouriteReducer from './favouriteReducer';

const reducer = combineReducers({
    category: categoryReducer,
    favourite: favouriteReducer,
  });

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.());

export default store;
