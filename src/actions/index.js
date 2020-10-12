const addBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

const changeFilter = category => ({
  type: 'CHANGE_FILTER',
  category,
});

const getBooks = books => ({
  type: 'LOAD_BOOKS',
  books,
});

export {
  addBook, changeFilter, getBooks,
};
