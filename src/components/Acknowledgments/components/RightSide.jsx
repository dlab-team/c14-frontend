import { useState } from 'react';
import RatingModal from './RatingModal';
const RightSide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openRating = () => setIsModalOpen(true);
  const closeRating = () => setIsModalOpen(false);

  const RainbowGradient =
    'bg-gradient-to-r from-red-500 via-purple-600 via-blue-600 to-green-500 text-transparent bg-clip-text';

  return (
    <div>
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
      <div className="mx-auto mt-5 w-[10rem] sm:w-[14rem]">
        <button
          type="button"
          className="text-white bg-black rounded-lg border border-black w-[10rem] sm:w-[14rem] h-13 sm:h-11 font-semibold text-lg"
          onClick={openRating}
        >
          ¡Dejanos un comentario!
        </button>
      </div>
      <RatingModal isOpen={isModalOpen} onClose={closeRating} />
    </div>
  );
};

export default RightSide;
