const OptButton = ({ toggleOptionModal }) => {
  return (
    <div className="mb-4">
      <button
        className="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-full cursor-pointer transition duration-300 ease-in-out"
        onClick={() => toggleOptionModal()}
      >
        Agregar una opción
      </button>
    </div>
  );
};

export default OptButton;
