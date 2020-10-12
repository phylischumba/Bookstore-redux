/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../actions/index';
import categoryOptions from './constants';
import './bookForm.css';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
      author: 'placeholder',
      percentage: 44,
    };
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.formSubmit(e.target);
    e.target.reset();

    this.setState({
      title: '',
      category: 'Action',
    });
  }

  async formSubmit(formData) {
    const { submitNewBook } = this.props;
    const data = new FormData(formData);
    await fetch('http://localhost:3000/api/v1/books', {
      method: 'POST',
      mode: 'cors',
      // 'Content-Type': 'application/json',
      // Accept: 'application/json',
      body: data,
    })
      .then(response => response.json())
      .then(r => submitNewBook(r));
  }

  render() {
    const { defaultCategory } = this.state;
    const options = categoryOptions.map(category => (
      <option
        value={category}
        key={category}
      >
        {category}
      </option>
    ));
    return (
      <form onSubmit={this.handleSubmit}>
        <h5 className="add-book">Add New Book</h5>

        <div className="form-body">
          <div className="input-field">
            <input name="book[title]" required type="text" id="title" onChange={this.handleChange} placeholder="Book Title" />
          </div>
          <div className="input-field">
            <input name="book[percentage]" required type="number" id="percentage" onChange={this.handleChange} placeholder="%" />
          </div>
          <div className="input-field">
            <input name="book[author]" required type="text" id="author" onChange={this.handleChange} placeholder="Author" />
          </div>

          <div className="input-field">
            <select name="book[category]" id="category" value={defaultCategory} onChange={this.handleChange}>
              {options}
            </select>
          </div>

          <button type="submit">Create Book</button>
        </div>
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
