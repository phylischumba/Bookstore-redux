import initialBookState from './initialState';

const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        action.book,
      ];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;
