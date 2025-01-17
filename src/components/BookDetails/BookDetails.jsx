import { useLoaderData, useParams } from 'react-router-dom';
import './BookDetails.css';
import 'react-toastify/dist/ReactToastify.css';
import {
  setDataToLocalStorage,
  setWishlistDataToLocalStorage,
} from '../../utility/localStorage';
import { ToastContainer } from 'react-toastify';

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();

  const book = books.find(book => book.id === parseInt(id));

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    publishing_year,
    rating,
  } = book;

  const handleReadBooks = () => {
    setDataToLocalStorage(book);
  };

  const handleWishlistBooks = () => {
    setWishlistDataToLocalStorage(book);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 work-font m-5 lg:m-0">
      <div className="lg:w-1/2 bg-[#1313130D] flex justify-center max-h-[710px] p-6 lg:p-20 object-cover rounded-2xl">
        <img className=" h-full w-auto" src={image} alt="" />
      </div>
      <div className="work-font lg:w-1/2 space-y-6">
        <h1 className="playfair-font text-[40px] font-bold">{bookName}</h1>
        <p className="text-xl font-medium text-[#131313CC]">By: {author}</p>
        <hr className="w-full" />
        <p className="text-xl font-medium text-[#131313CC]">{category}</p>
        <hr className="w-full" />
        <p className="text-[#131313B3] leading-6">
          <span className="text-black font-bold">Review:</span> {review}
        </p>
        <div className="flex items-center gap-4 text-[#23BE0A]">
          <h5 className="text-black font-bold">Tag:</h5>
          {tags.map((tag, idx) => (
            <h5
              className="font-medium bg-[#23BE0A0D] px-4 py-2 rounded-full"
              key={idx}
            >
              # {tag}
            </h5>
          ))}
        </div>
        <hr />

        <table>
          <tbody>
            <tr>
              <th>Number of Pages:</th>
              <td>{totalPages}</td>
            </tr>
            <tr>
              <th>Publisher:</th>
              <td>{publisher}</td>
            </tr>
            <tr>
              <th>Year of Publishing:</th>
              <td>{publishing_year}</td>
            </tr>
            <tr>
              <th>Rating:</th>
              <td>{rating}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <button
            onClick={handleReadBooks}
            className="btn font-semibold text-xl mr-4 h-auto px-7 py-[18px] bg-transparent border border-[#1313134D] rounded-lg"
          >
            Read
          </button>
          <button
            onClick={handleWishlistBooks}
            className="btn h-auto font-semibold text-xl px-7 text-white py-[18px] bg-[#50B1C9] rounded-lg"
          >
            Wishlist
          </button>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
      </div>
    </div>
  );
};

export default BookDetails;
