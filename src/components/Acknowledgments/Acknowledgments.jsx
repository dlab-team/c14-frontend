import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

const Acknowledgments = () => {
  return (
    <div className="flex flex-col h-screen lg:flex-row px-4">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Acknowledgments;
