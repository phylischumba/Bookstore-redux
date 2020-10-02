import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';

function BooksList({
  books, deleteBook, newCategory, category,
}) {
  const handleCategory = e => {
    newCategory(e.target.value === 'ALL' ? '' : e.target.value);
  };

  const filteredBooks = category === '' ? books : books.filter(book => book.category === category);
  const bookList = filteredBooks.map(book => (
    <Book
      deleteBook={deleteBook}
      book={book}
      key={book.id}
    />
  ));

  return (
    <div>
      <CategoryFilter category={category} handleCategory={handleCategory} />
      <table className="Books-list">
        <tbody>
          {bookList}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
  category: state.category,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: book => {
    dispatch(removeBook(book));
  },
  newCategory: book => {
    dispatch(changeFilter(book));
  },
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  deleteBook: PropTypes.func.isRequired,
  newCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
