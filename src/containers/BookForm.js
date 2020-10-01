/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../actions/index';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };

    this.categoryOptions = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const addNewBook = this.props;
    addNewBook.submitNewBook(this.state);
  }

  render() {
    const { defaultCategory } = this.state;
    const options = this.categoryOptions.map(category => (
      <option
        value={category}
        key={category}
      >
        {category}
      </option>
    ));
    return (
      <form onSubmit={this.handleSubmit}>
        <h5>Create Book</h5>
        <div className="input-field">
          <label htmlFor="title">
            Title
            <input type="text" id="title" onChange={this.handleChange} />
          </label>
        </div>
        <div className="input-field">
          <label htmlFor="category">
            Category
            <select id="category" value={defaultCategory} onChange={this.handleChange}>
              {options}
            </select>

          </label>

        </div>
        <button type="submit">Create Book</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  submitNewBook: newBook => {
    dispatch(addBook(newBook));
  },
});

BookForm.propTypes = {
  submitNewBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
