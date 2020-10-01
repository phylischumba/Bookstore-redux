import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <tr>
      <td>{book}</td>
      <td>Book Title</td>
      <td>Book Category</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.string.isRequired,
};

export default Book;
