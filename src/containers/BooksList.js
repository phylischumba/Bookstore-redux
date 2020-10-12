import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter, getBooks } from '../actions/index';

function BooksList({
  books, newCategory, category, syncBooks,
}) {
  const [didDelete, setDidDelete] = useState(false);

  const loadBooks = () => {
    try {
      fetch('http://localhost:3000/api/v1/books')
        .then(response => response.json())
        .then(data => {
          syncBooks(data);
          setDidDelete(false);
        });
    } catch (error) {
      // return error;
    }
  };

  const apiDeleteBook = ({ id }) => {
    try {
      fetch(`http://localhost:3000/api/v1/books/${id}`, { method: 'DELETE' })
        .then(setDidDelete(true));
    } catch (error) {
      // return error;
    }
  };

  const handleCategory = e => {
    newCategory(e.target.value);
  };
  const handleRemoveBook = book => {
    apiDeleteBook(book);
  };

  const filteredBooks = category === 'All' ? books : books.filter(book => book.category === category);
  const bookList = filteredBooks.map(book => (
    <Book
      deleteBook={handleRemoveBook}
      book={book}
      key={book.id}
    />
  ));

  // eslint-disable-next-line
  useEffect(() => loadBooks(), [didDelete]);

  return (
    <div>
      <CategoryFilter category={category} handleCategory={handleCategory} didDelete={didDelete} />
      <div className="Books-list">
        <div>
          {bookList}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
  category: state.category,
});

const mapDispatchToProps = dispatch => ({
  newCategory: book => {
    dispatch(changeFilter(book));
  },
  syncBooks: books => {
    dispatch(getBooks(books));
  },
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  newCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  syncBooks: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
