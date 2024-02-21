import { IoCheckmarkCircle } from 'react-icons/io5';
import ShareModal from './ShareModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LeftSide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goBack = () => {
    navigate('/');
  };
  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center lg:my-auto mt-10">
        <div className="border border-gray-300 shadow-xl shadow-gray-300 w-[320px] rounded-xl">
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center justify-center mb-4 mt-5">
              <IoCheckmarkCircle className="w-[9rem] h-[9rem] text-fuchsia-900 opacity-75" />
            </div>
            <div className="flex gap-x-4 pt-4 pb-5">
              <h1 className="font-semibold text-2xl text-center">Llegamos al final</h1>
            </div>
            <div className="flex gap-x-4">
              <h2 className="text-slate-950 ml-1 font-medium text-lg text-center">
                ¡Gracias por participar!
              </h2>
            </div>
            <div className="flex gap-x-2 mt-5 mb-4 w-full px-3">
              <button
                type="button"
                className="text-white bg-black rounded-lg border border-black w-full h-11 font-semibold text-lg"
                onClick={openModal}
              >
                Compartir Resultados
              </button>
            </div>
            <div className="w-full flex justify-center">
              <button
                type="button"
                className="text-black bg-white rounded-lg border border-black w-full h-11 font-semibold items-center text-lg mb-6 mx-3"
                onClick={goBack}
              >
                Volver a Inicio
              </button>
            </div>
          </div>
        </div>
      </div>
      <ShareModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default LeftSide;
