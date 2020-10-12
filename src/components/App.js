import React, { Suspense } from 'react';
import './App.css';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BookForm';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BooksList />
        <BookForm />
      </Suspense>
    </div>
  );
}

export default App;
