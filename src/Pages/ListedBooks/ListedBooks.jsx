import ReadBooks from '../../components/ReadBooks/ReadBooks';

const ListedBooks = () => {
  return (
    <div>
      <div className="text-center">
        <div className="py-8 bg-[#1313130D] rounded-2xl">
          <h1>Books</h1>
        </div>
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn bg-[#23BE0A] m-1">
            Click
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
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <ReadBooks></ReadBooks>
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
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
