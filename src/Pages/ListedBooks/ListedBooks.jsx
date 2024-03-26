import { useEffect, useState } from 'react';
import ReadBooks from '../../components/ReadBooks/ReadBooks';
import {
  compareBooksByPage,
  compareBooksByRating,
  compareBooksByYear,
  getStoredData,
  getWishlistStoredData,
} from '../../utility/localStorage';
import { IoIosArrowDown } from 'react-icons/io';

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  const [displayReadBooks, setDisplayReadBooks] = useState([]);

  // console.log(displayReadBooks);
  useEffect(() => {
    const booksRead = getStoredData();
    setReadBooks(booksRead);
    setDisplayReadBooks(booksRead);
    const wishlistBooksData = getWishlistStoredData();
    setWishlistBooks(wishlistBooksData);
  }, []);

  const handleFilteredBooks = filter => {
    const data = [...readBooks];
    if (filter == 'rating') {
      compareBooksByRating(data);
      setDisplayReadBooks(data);
    } else if (filter == 'PageNumber') {
      compareBooksByPage(data);
      setDisplayReadBooks(data);
    } else if (filter == 'year') {
      compareBooksByYear(data);
      setDisplayReadBooks(data);
    }
  };

  if (displayReadBooks.length <= 0 && wishlistBooks.length <= 0) {
    return (
      <div>
        <div className="text-center">
          <div className="py-8 playfair-font font-bold text-3xl bg-[#1313130D] rounded-2xl">
            <h1>Books</h1>
          </div>
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-[#23BE0A] m-1 text-white"
            >
              Sort By <IoIosArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content -left-3/4 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>rating</a>
              </li>
              <li>
                <a>Number of Pages</a>
              </li>
              <li>
                <a>Published Year</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-8 playfair-font font-bold text-3xl text-center my-16">
          <h1>You do not have any listed books </h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center">
        <div className="py-8 bg-[#1313130D] rounded-2xl mb-5">
          <h1 className="playfair-font font-bold text-4xl">Books</h1>
        </div>
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-[#23BE0A] m-1 text-white "
          >
            Sort By <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content content-center -left-3/4 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleFilteredBooks('rating')}>
              <a>rating</a>
            </li>
            <li onClick={() => handleFilteredBooks('PageNumber')}>
              <a>Number of Pages</a>
            </li>
            <li onClick={() => handleFilteredBooks('year')}>
              <a>Published Year</a>
            </li>
          </ul>
        </div>
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content space-y-6 bg-base-100 border-base-300 rounded-box p-6"
        >
          {displayReadBooks.map(item => (
            <ReadBooks readBook={item} key={item.id}></ReadBooks>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {wishlistBooks.map(wishlistBook => (
            <ReadBooks
              readBook={wishlistBook}
              key={wishlistBook.id}
            ></ReadBooks>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
