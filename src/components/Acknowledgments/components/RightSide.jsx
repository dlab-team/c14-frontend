const RightSide = () => {
  const RainbowGradient =
    'bg-gradient-to-r from-red-500 via-purple-600 via-blue-600 to-green-500 text-transparent bg-clip-text';

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex justify-center flex-col sm:flex-row gap-y-2 gap-x-5">
          <div className="text-3xl font-bold flex flex-col gap-2 justify-between items-end">
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
          <div className="bg-slate-950 h-[11rem] w-[11rem] flex items-center justify-center">
            <img src="/logo/logo-3xi-blanco.png" alt="Logo 3xi" className="h-[7.5rem]" />
          </div>
        </div>
        <div className="bg-white  flex items-center justify-center">
          <img
            src="logo/criteria/criteriaLogo.png"
            alt="Logo criteria"
            className="w-[280px] h-[70px]"
          />
        </div>
      </div>
    </>
  );
};

export default RightSide;
