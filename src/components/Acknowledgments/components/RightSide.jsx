const RightSide = () => {
  const RainbowGradient =
    'bg-gradient-to-r from-red-500 via-purple-600 via-blue-600 to-green-500 text-transparent bg-clip-text';

  return (
    <div className="flex-1 flex items-center justify-center flex-col md:flex-row pb-20 md:pb-0 md:ml-[-30rem]">
      <div className="text-3xl font-bold h-[11rem] flex flex-col justify-between items-end md:mr-6 md:mb-0 mt-[8rem] md:mt-0">
        <p>
          Inspirar<span className={RainbowGradient}>NOS</span>
        </p>
        <p>
          Incluir<span className={RainbowGradient}>NOS</span>
        </p>
        <p>
          Innovar<span className={RainbowGradient}>NOS</span>
        </p>
      </div>
      <div className="bg-slate-950 h-[11rem] w-[11rem] flex items-center justify-center md:mt-0 mt-7">
        <img src="/logo/logo-3xi-blanco.png" alt="Logo 3xi" className="h-[7.5rem]" />
      </div>
    </div>
  );
};

export default RightSide;
