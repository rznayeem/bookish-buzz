import { useEffect } from 'react';
import { useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('books.json')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="mt-24">
      <h1 className="playfair-font text-4xl font-bold text-center">Books</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {books.map(book => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
