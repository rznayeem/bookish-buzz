import { Link } from 'react-router-dom';
import banner from '../../assets/banner.png';

const Banner = () => {
  return (
    <div className="lg:max-h-[554px] max-h-[450px] flex flex-col lg:flex-row justify-between items-center bg-[#1313130D] rounded-3xl lg:px-[120px] px-[20px] lg:py-[80px] py-[40px]">
      <div>
        <h1 className="playfair-font lg:text-[56px] text-[18px] font-bold">
          Books to freshen up <br className="lg:flex hidden" /> your bookshelf
        </h1>
        <Link to={'/listed'}>
          <button className="btn mt-12 bg-[#23BE0A] px-7 py-5 h-auto font-bold text-xl text-white">
            View The List
          </button>
        </Link>
      </div>
      <img className="h-[250px] lg:h-[400px]" src={banner} alt="" />
    </div>
  );
};

export default Banner;
