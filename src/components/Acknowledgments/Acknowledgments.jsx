import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

const Acknowledgments = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Acknowledgments;
