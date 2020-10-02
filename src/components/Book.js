/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import './book.css';

function Book({ book, deleteBook }) {
  return (
    <div className="display-row">
      <tr className="book-row">
        <td className="book-category">{ book.category }</td>
        <td className="book-title">{ book.title }</td>
        <td className="delete-button">
          <a href="#">Comments</a>
          <button type="button" onClick={() => deleteBook(book)}>Remove Book</button>
          <a href="#">Edit</a>
        </td>
      </tr>
      <div className="progress">
        <div className="columns-display">
          <svg>
            <circle cx="70" cy="70" r="34" />
            <circle cx="70" cy="70" r="34" />
          </svg>
          <div className="progress-content">
            <span className="percent">64%</span>
            <span className="completed">Completed</span>
          </div>
        </div>
        <div className="update-progress">
          <p>CURRENT CHAPTER</p>
          <p>CHAPTER 16</p>
          <button type="button" className="update-btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
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
