import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

function BooksList(props) {
  const { books } = props;
  const { book } = books;
  return (
    <table className="Books-list">
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Book Title</th>
          <th>Book Category</th>
        </tr>
      </thead>
      <tbody>
        <Book book={book} />
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
