import PropTypes from 'prop-types';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const { id, image, bookName, author, tags, category, rating } = book;

  return (
    <Link
      to={`/book/${id}`}
      className="card bg-base-100 hover:shadow-[0px_0px_30px_2px_rgba(100,100,111,0.1)] work-font border border-[#13131326]"
    >
      <figure className="px-10 py-10 rounded-2xl bg-[#F3F3F3] m-6">
        <img src={image} alt="Book Image" className="h-[166px]" />
      </figure>
      <div className="card-body space-y-4 items-start text-center">
        <div className="flex flex-col lg:flex-row space-x-3 text-[#23BE0A] text-[16px] font-medium">
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
        <hr className="border w-full border-dashed" />
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
    </Link>
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
