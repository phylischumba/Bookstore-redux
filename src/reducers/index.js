import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({
  books: bookReducer,
  category: filterReducer,
});

export default rootReducer;
