import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, deleteBook }) {
  return (
    <tr>
      <td>{ book.id }</td>
      <td>{ book.title }</td>
      <td>{ book.category }</td>
      <td><button type="button" onClick={() => deleteBook(book)}>Remove Book</button></td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,

};

export default Book;
