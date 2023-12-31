import React, { useState } from 'react';
import Button from '../../layouts/Button';
import { useNavigate } from 'react-router-dom';
import useFormStore from '@/store/useFormStore';
import Terms from '@/components/Terms/Terms';
import { Toaster, toast } from 'sonner';

export default function Home() {
  const clearForm = useFormStore(state => state.clearForm);
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isChecked) {
      clearForm();
      navigate('/cuestionario');
    } else {
      toast.error('Por favor, acepte los términos y condiciones');
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAccept = () => {
    setIsChecked(true);
    closeModal();
  };

  return (
    <React.Fragment>
      <Toaster position="top-center" />
      <Terms isOpen={isModalOpen} onClose={closeModal} onAccept={handleAccept} />
      <div className="grid lg:grid-cols-2 h-[90vh] ">
        <div className="hidden lg:flex flex-col h-full">
          <img src="/logo/criteria/criteriaLogo.png" alt="Logo criteria" className="w-72 p-12 " />
          <div className="relative flex gap-2 items-end h-full">
            <div className="bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 w-16 h-full shadow-2xl rounded-t-sm"></div>

            <div className="bg-gradient-to-b from-lime-400 via-lime-500 to-lime-600 w-16 h-[96%] shadow-2xl rounded-t-sm pt-5"></div>

            <div className="bg-gradient-to-b from-purple-500 via-purple-600 to-purple-700 w-16 h-[92%] shadow-2xl rounded-t-sm"></div>

            <div className="bg-gradient-to-b from-red-500 via-pink-600 to-pink-700 w-16 h-[88%] shadow-2xl rounded-t-sm"></div>

            <div className="bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 w-16 h-[84%] shadow-2xl rounded-t-sm"></div>

            <div className="absolute top-28 left-64">
              <img src="/logo/logo-3xi-negro.png" alt="Logo criteria" className="w-44 relative" />
              <div className="flex flex-col leading-5 absolute -right-10 mt-3 font-medium">
                <span>Inspirarnos</span>
                <span>Incluirnos</span>
                <span>Innovarnos</span>
              </div>
              <p className="text-start ">
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:justify-center lg:me-36 pt-20 lg:pt-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mx-4">
            Estudio Polarizaciones
          </h1>
          <p className="xl:text-xl text-center px-10 sm:px-28 lg:px-0 py-10 text-slate-600 w-[90%]">
            Esta encuesta es muy especial porque te vamos a desafiar. A continuación, te
            presentaremos una serie de frases que quizás no representen exactamente tu pensamiento e
            incluso te pueden parecer un poco exageradas. Y lo que te pedimos es que hagas el
            esfuerzo por responder igualmente. Sintetizar temas sociales en frases es complejo y
            siempre se generan problemas, pero es la única manera que tenemos de medir opiniones en
            una encuesta.
          </p>
          <div className="lg:hidden flex flex-col items-center h-[500px] pb-16 mx-6">
            <div className="flex ">
              <img
                src="/logo/criteria/criteriaLogo.png"
                alt="Logo criteria"
                className="w-72 py-12"
              />
            </div>
            <div className="relative flex gap-1 items-end h-full me-20">
              <div className="bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 w-12 h-full shadow-2xl rounded-t-sm"></div>

              <div className="bg-gradient-to-b from-lime-400 via-lime-500 to-lime-600 w-12 h-[95%] shadow-2xl rounded-t-sm pt-5"></div>

              <div className="bg-gradient-to-b from-purple-500 via-purple-600 to-purple-700 w-12 h-[90%] shadow-2xl rounded-t-sm"></div>

              <div className="bg-gradient-to-b from-red-500 via-pink-600 to-pink-700 w-12 h-[85%] shadow-2xl rounded-t-sm"></div>

              <div className="bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 w-12 h-[80%] shadow-2xl rounded-t-sm"></div>

              <div className="absolute top-24 -right-11">
                <img src="/logo/logo-3xi-negro.png" alt="Logo criteria" className="w-24" />
                <div className="flex flex-col leading-5 absolute -right-12 mt-1 font-medium">
                  <span>Inspirarnos</span>
                  <span>Incluirnos</span>
                  <span>Innovarnos</span>
                </div>
                <p className="text-start ">
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-96">
            <p className="flex items-center justify-center mb-9">
              <input
                type="checkbox"
                className="h-5 w-5 mr-2"
                checked={isChecked}
                onChange={handleCheckboxChange}
                disabled
              />
              <span className="font-medium text-sm">Estoy de acuerdo con los </span>
              <span className="underline cursor-pointer font-bold text-sm ml-1" onClick={openModal}>
                terminos y condiciones
              </span>
            </p>
            <div className="lg:pb-0 pb-10">
              <Button title={'¡Quiero participar! '} onClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
