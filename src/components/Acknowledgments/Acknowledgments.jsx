import { Information } from './components/Information';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

const Acknowledgments = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-9">
      <div className='md:mb-8'>
        <Information />
      </div>
      <div className='lg:flex lg:gap-[200px]'>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default Acknowledgments;
