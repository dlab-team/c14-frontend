const Lines = () => {
  return (
    <div className="flex-1 flex hidden sm:flex">
        <div className="bg-teal-500 flex-1 flex items-center justify-center">
        <img src="/logo/logo-3xi-blanco.png" alt="Logo 3xi" className="h-14" />
        </div>
        <div className="bg-lime-400 flex-1">
        </div>
        <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-purple-600 via-purple-500 to-purple-500">
        <img src="/logo/logo-3xi-blanco.png" alt="Logo 3xi" className="h-14" />
        </div>
        <div className="flex-1 flex bg-gradient-to-b from-red-600 via-rose-500 to-pink-700">
        </div>
        <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-orange-400 via-orange-400 to-orange-500">
        <img src="/logo/logo-3xi-blanco.png" alt="Logo 3xi" className="h-14" />
        </div>
      </div>
  );
};

export default Lines;