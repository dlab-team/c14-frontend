const Button = ({ title }) => {
  return (
    <button className="bg-black px-4 py-2 rounded-2xl text-white text-xl font-bold flex justify-center items-center ">
      {title}
    </button>
  );
};

export default Button;
