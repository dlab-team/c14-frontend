const OptButton = ({ toggleOptionModal }) => {
  return (
    <div className="mb-3">
      <button
        className="bg-black px-4 py-2 rounded-2xl text-white text-sm font-bold flex justify-center items-center gap-2 transition-all hover:scale-105"
        onClick={() => toggleOptionModal()}
      >
        Agregar una opción
      </button>
    </div>
  );
};

export default OptButton;
