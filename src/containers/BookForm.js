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
      id: null,
      title: '',
      category: 'Action',
    };
  }

  handleChange = e => {
    const { booksLength } = this.props;
    this.setState({ id: booksLength });
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { submitNewBook } = this.props;
    submitNewBook(this.state);
    e.target.reset();

    const { booksLength } = this.props;
    this.setState({
      id: booksLength + 1,
      title: '',
      category: 'Action',
    });
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
            <input required type="text" id="title" onChange={this.handleChange} placeholder="Book Title" />
          </div>

          <div className="input-field">
            <select id="category" value={defaultCategory} onChange={this.handleChange}>
              {options}
            </select>
          </div>

          <button type="submit">Create Book</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  booksLength: state.books.length,
});

const mapDispatchToProps = dispatch => ({
  submitNewBook: newBook => {
    dispatch(addBook(newBook));
  },
});

BookForm.propTypes = {
  submitNewBook: PropTypes.func.isRequired,
  booksLength: PropTypes.number.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
