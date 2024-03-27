import { Link } from 'react-router-dom';
import banner from '../../assets/banner.png';

const Banner = () => {
  return (
    <div className="lg:max-h-[554px] flex flex-col lg:flex-row justify-between items-center bg-[#1313130D] rounded-3xl lg:px-[120px] px-[20px] lg:py-[80px] py-[40px]">
      <div className="flex flex-col items-center lg:items-start mb-5 lg:mb-0">
        <h1 className="playfair-font lg:text-[56px] text-[40px] font-bold">
          Books to freshen up <br className="lg:flex hidden" /> your bookshelf
        </h1>
        <Link to={'/listed'}>
          <button className="btn mt-12 bg-[#23BE0A] hover:bg-[#1D8348] px-7 py-5 h-auto font-bold text-xl text-white">
            View The List
          </button>
        </Link>
      </div>
      <img className="h-[250px] lg:h-[400px]" src={banner} alt="" />
    </div>
  );
};

export default Banner;
