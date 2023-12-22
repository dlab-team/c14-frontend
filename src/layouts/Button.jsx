import { twMerge } from 'tailwind-merge';

const Button = ({ title, className, ...props }) => {
  return (
    <button
      className={twMerge(
        'bg-black px-4 py-2 rounded-2xl text-white text-xl font-bold flex justify-center items-center w-full',
        className
      )}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
