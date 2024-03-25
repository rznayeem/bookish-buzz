import PropTypes from 'prop-types';
import { FaRegStar } from 'react-icons/fa';

const Book = ({ book }) => {
  const { id, image, bookName, author, tags, category, rating } = book;

  return (
    <div className="card bg-base-100 shadow-xl work-font">
      <figure className="px-10 pt-10 bg-[#F3F3F3] m-6">
        <img src={image} alt="Book Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-start text-center">
        <div className="flex space-x-3 text-[#23BE0A] text-[16px] font-medium">
          {tags.map((tag, idx) => (
            <p className="bg-[#23BE0A0D] rounded-full px-4 py-2" key={idx}>
              {tag}
            </p>
          ))}
        </div>
        <h2 className="card-title playfair-font font-bold text-2xl">
          {bookName}
        </h2>
        <p className="text-[#131313CC] font-medium">By: {author}</p>
        <hr className="border-dashed" />
        <div className="flex justify-between w-full">
          <div>
            <p>{category}</p>
          </div>
          <div>
            <p className="flex items-center gap-2">
              {rating} <FaRegStar />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    author: PropTypes.any,
    bookName: PropTypes.any,
    category: PropTypes.any,
    id: PropTypes.any,
    image: PropTypes.any,
    rating: PropTypes.any,
    tags: PropTypes.array,
  }),
};

export default Book;
