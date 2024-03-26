import { toast } from 'react-toastify';

export const setDataToLocalStorage = book => {
  const savedData = JSON.parse(localStorage.getItem('books')) || [];

  const readBooks = savedData.find(readBook => readBook.id === book.id);

  if (readBooks) {
    toast.error('You have already read this book');
  } else {
    savedData.push(book);
    localStorage.setItem('books', JSON.stringify(savedData));
    toast.success('You have read this book successfully');
  }
};

export const getStoredData = () => {
  const data = JSON.parse(localStorage.getItem('books')) || [];
  return data;
};
