import { IoCheckmarkCircle } from 'react-icons/io5';
import ShareModal from './ShareModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LeftSide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const goBack = () => {
    navigate('/');
  };
  return (
    <>
      <article className="border border-gray-300 shadow-xl shadow-gray-300 w-[320px] rounded-xl p-5">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center">
            <IoCheckmarkCircle className="w-[8rem] h-[8rem] text-fuchsia-900 opacity-75" />
          </div>
          <h1 className="font-semibold text-2xl text-center py-2.5">Llegamos al final</h1>
          <h2 className="text-slate-950 font-medium text-lg text-center">
            ¡Gracias por participar!
          </h2>
          <footer className="flex flex-col gap-3 mt-5 w-full">
            <button
              type="button"
              className="text-white bg-black rounded-lg border border-black w-full h-11 font-semibold text-lg"
              onClick={openModal}
            >
              Compartir Resultados
            </button>
            <button
              type="button"
              className="text-black bg-white rounded-lg border border-black w-full h-11 font-semibold items-center text-lg"
              onClick={goBack}
            >
              Volver a Inicio
            </button>
          </footer>
        </div>
      </article>
      <ShareModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default LeftSide;
