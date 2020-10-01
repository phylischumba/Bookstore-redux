import React from 'react';
import './App.css';
import BooksList from './BooksList';
import BookForm from './BookForm';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;
