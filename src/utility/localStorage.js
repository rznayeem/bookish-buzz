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
export const setWishlistDataToLocalStorage = book => {
  const savedData = JSON.parse(localStorage.getItem('books')) || [];
  const savedWishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];

  const readBooks = savedData.find(readBook => readBook.id === book.id);
  const readWishlistBooks = savedWishlistData.find(
    readWishlistBook => readWishlistBook.id === book.id
  );

  if (readWishlistBooks) {
    toast.error('You have already added this book to wishlist');
  } else if (readBooks) {
    toast.error('You have already read this book');
  } else {
    savedWishlistData.push(book);
    localStorage.setItem('wishlist', JSON.stringify(savedWishlistData));
    toast.success('You have added this book to wishlist');
  }
};

export const getStoredData = () => {
  const data = JSON.parse(localStorage.getItem('books')) || [];
  return data;
};
export const getWishlistStoredData = () => {
  const data = JSON.parse(localStorage.getItem('wishlist')) || [];
  return data;
};
