const OptButton = ({ toggleOptionModal }) => {
  return (
    <div className="mb-3">
      <button
        className="underline text-black px-4 py-2 rounded cursor-pointer"
        onClick={() => toggleOptionModal()}
      >
        Agregar una opción
      </button>
    </div>
  );
};

export default OptButton;
