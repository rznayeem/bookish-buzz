import { toast } from 'react-toastify';

export const getStoredData = book => {
  const savedData = JSON.parse(localStorage.getItem('books')) || [];

  const readBooks = savedData.find(readBook => readBook.id === book.id);

  if (readBooks) {
    toast.error('You have already read this book');
  } else {
    savedData.push(book);
    localStorage.setItem('books', JSON.stringify(savedData));
  }
};
