import React from 'react';
import { connect } from 'react-redux';

function BooksList(props) {
  console.log(props);
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
        <tr>
          <td>{props.books.books}</td>
          <td>Book Title</td>
          <td>Book Category</td>
        </tr>
      </tbody>
    </table>
  );
}

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
