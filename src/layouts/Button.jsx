import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Button = ({ title, className, ...props }) => {
  return (
    <button
      className={twMerge(
        'bg-slate-900 px-4 py-2 rounded-2xl text-white text-xl font-bold flex justify-center items-center w-full transition-all hover:scale-105',
        className
      )}
      {...props}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
