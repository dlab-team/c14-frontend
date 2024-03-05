import { IoCheckmarkCircle } from 'react-icons/io5';
import ShareModal from './ShareModal';
import RatingModal from './RatingModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoShareSocialOutline } from 'react-icons/io5';

const LeftSide = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const navigate = useNavigate();

  const openShareModal = () => setIsShareModalOpen(true);
  const closeShareModal = () => setIsShareModalOpen(false);
  const openRatingModal = () => setIsRatingModalOpen(true);
  const closeRatingModal = () => setIsRatingModalOpen(false);

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
          <footer className="gap-3 mt-5 w-full">
            <div className="flex flex-row gap-2 mb-2">
              <button
                type="button"
                className="text-white bg-black rounded-lg border border-black w-full h-11 font-semibold text-lg"
                onClick={openRatingModal}
              >
                Entregar Feedback
              </button>
              <button type="button" onClick={openShareModal}>
                <IoShareSocialOutline
                  onClick={openShareModal}
                  className="w-12 h-11 bg-black text-white rounded-lg p-1"
                />
              </button>
            </div>
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
      <RatingModal isOpen={isRatingModalOpen} onClose={closeRatingModal} />
      <ShareModal isOpen={isShareModalOpen} onClose={closeShareModal} />
    </>
  );
};

export default LeftSide;
