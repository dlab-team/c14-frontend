import { FaRegTrashCan } from 'react-icons/fa6';
import { FiEdit3 } from 'react-icons/fi';

const PolynomialCard = ({
  polynomial,
  deletePolynomial,
  toggleEditPolynomialModal,
  DetailsOpt,
  isOptionsOpen,
  children,
}) => {
  return (
    <div
      key={polynomial?.id}
      className="relative overflow-x-auto mx-auto my-8 max-w-4xl border rounded border-slate-200 bg-white shadow-xl p-4 md:p-10 mb-10 "
    >
      <div className="flex justify-between items-center text-xl m-2">
        <p className="font-semibold w-52 sm:mb-5">{polynomial.name}</p>
        <p className="font-semibold hidden sm:block">{polynomial.active ? 'Activo' : 'Inactivo'}</p>
        <div className="flex gap-4">
          <button
            className="border hover:border-black border-white rounded-md transition-all hover:scale-105"
            onClick={() => deletePolynomial(polynomial.id)}
          >
            <FaRegTrashCan size={28} color="Crimson" />
          </button>
          <button
            className="border hover:border-black border-white rounded-md transition-all hover:scale-105"
            onClick={() => toggleEditPolynomialModal(polynomial)}
          >
            <FiEdit3 color="DarkCyan" size={28} />
          </button>
          <button
            className={`border rounded border-black p-1 transition-all hover:scale-105 ${
              isOptionsOpen ? 'bg-black text-white' : 'bg-white text-black'
            }`}
            onClick={() => DetailsOpt(polynomial)}
          >
            Opciones
          </button>
        </div>
      </div>

      {isOptionsOpen && <div className="bg-white p-4">{children}</div>}
    </div>
  );
};

export default PolynomialCard;
