import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

function BooksList(props) {
  const { books } = props;
  const bookList = books.map(book => (<Book book={book} key={Math.random()} />));
  return (
    <table className="Books-list">
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Book Category</th>
        </tr>
      </thead>
      <tbody>
        {bookList}
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
