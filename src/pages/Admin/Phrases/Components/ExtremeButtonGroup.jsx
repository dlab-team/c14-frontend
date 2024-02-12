import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export const ExtremeButtonGroup = ({ currentExtreme, handleExtreme }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center rounded-2xl">
      <button
        className={twMerge(
          'px-4 py-2 text-xl rounded-l-2xl text-white font-bold flex justify-center items-center transition-all hover:scale-105 bg-neutral-400 border',
          currentExtreme === 'Extremo 1' && 'bg-purple-500'
        )}
        onClick={() => handleExtreme('Extremo 1')}
      >
        Extremo 1
      </button>

      <button
        className={twMerge(
          'px-4 py-2 text-xl rounded-r-2xl text-white font-bold flex justify-center items-center transition-all hover:scale-105 bg-neutral-400 border',
          currentExtreme === 'Extremo 2' && 'bg-teal-500'
        )}
        onClick={() => handleExtreme('Extremo 2')}
      >
        Extremo 2
      </button>
    </div>
  );
};

ExtremeButtonGroup.propTypes = {
  currentExtreme: PropTypes.string.isRequired,
  handleExtreme: PropTypes.func.isRequired,
};
