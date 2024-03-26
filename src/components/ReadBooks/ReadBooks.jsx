import { useEffect, useState } from 'react';

const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const booksRead = JSON.parse(localStorage.getItem('books'));
    setReadBooks(booksRead);
  }, []);
  console.log(readBooks);
  return (
    <div>
      <h1>read books</h1>
    </div>
  );
};

export default ReadBooks;
