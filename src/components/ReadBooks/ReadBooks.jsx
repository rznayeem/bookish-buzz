import PropTypes from 'prop-types';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineUsers } from 'react-icons/hi2';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const ReadBooks = ({ readBook }) => {
  const {
    id,
    image,
    bookName,
    author,
    tags,
    publishing_year,
    publisher,
    totalPages,
    category,
    rating,
  } = readBook;

  return (
    <div className="card card-side bg-base-100 hover:shadow-[0px_0px_30px_2px_rgba(100,100,111,0.1)] border work-font">
      <figure className="w-[230px] bg-[#1313130D] rounded-2xl border m-6 py-7 px-12 flex justify-center items-center">
        <img src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title playfair-font">{bookName}</h2>
        <p>By: {author}</p>
        <div className="flex gap-5">
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
          <div className="flex gap-4 items-center">
            <GrLocation className="text-2xl" />
            <p>Year of Publishing: {publishing_year}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <HiOutlineUsers className="text-2xl" />
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex gap-2 items-center">
            <LuFileSpreadsheet className="text-2xl" />
            <p>Page {totalPages}</p>
          </div>
        </div>
        <hr />
        <div className="flex w-fit gap-4">
          <p className="bg-[#328EFF26] w-fit text-[#328EFF] rounded-full px-5 py-3">
            Category: {category}
          </p>
          <p className="bg-[#FFAC3326] w-fit text-[#FFAC33] rounded-full px-5 py-3">
            Rating: {rating}
          </p>

          <Link to={`/book/${id}`}>
            <button className="btn bg-[#23BE0A] text-white rounded-full text-[18px] font-medium">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ReadBooks.propTypes = {
  readBook: PropTypes.shape({
    author: PropTypes.any,
    bookName: PropTypes.any,
    category: PropTypes.any,
    image: PropTypes.any,
    publisher: PropTypes.any,
    publishing_year: PropTypes.any,
    rating: PropTypes.any,
    tags: PropTypes.any,
    totalPages: PropTypes.any,
  }),
};

export default ReadBooks;
