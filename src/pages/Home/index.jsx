import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import Button from '../../layouts/Button';
import Terms from '@/components/Terms/Terms';
import useFormStore from '@/store/useFormStore';
import useCreateResponse from '@/hooks/useCreateResponse';
import { osName } from 'react-device-detect';

export default function Home() {
  const clearForm = useFormStore(state => state.clearForm);
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setAcceptedTerms = useFormStore(state => state.setAcceptedTerms);
  const { mutate: createResponse } = useCreateResponse();
  const [ip, setIp] = useState();
  const [isIpLoaded, setIsIpLoaded] = useState(false);

  useEffect(() => {
    const getIp = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setIp(data);
        setIsIpLoaded(true);
      } catch (error) {
        console.error('Error fetching IP:', error);
      }
    };
    getIp();
  }, []);

  const handleClick = () => {
    if (isChecked) {
      clearForm();
      setAcceptedTerms(true);
      createResponse({
        os: osName,
        country: ip.country_name,
        region: ip.region,
        city: ip.city,
        finishedSocialForm: false,
        duration: 0,
      });
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
        <img
          src="logo/logo-estudio.png"
          alt="Logo estudio"
          width={'60%'}
          className="mx-auto my-10 lg:my-10 lg:ml-20"
        />
        <div className="flex flex-col items-center lg:justify-center lg:me-36 lg:pt-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mx-4">
            Test de polarizaciones
          </h1>
          <h2 className="text-2xl text-center mx-4"> ¡Descúbrete y despolarízate!</h2>
          <p className="xl:text-xl text-center px-10 sm:px-28 lg:px-0 py-10 text-slate-600 w-[90%]">
          Te invitamos a responder esta encuesta con total sinceridad y a descubrir cuál es tu grado de polarización.
          </p>
          <div className="lg:hidden flex flex-col items-center mx-6"></div>
          <div className="lg:w-96">
            <p className="flex items-center justify-center mb-9">
              <input
                type="checkbox"
                className="h-5 w-5 mr-2"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="font-medium text-sm">Estoy de acuerdo con los </span>
              <span className="underline cursor-pointer font-bold text-sm ml-1" onClick={openModal}>
                términos y condiciones
              </span>
            </p>
            <div className="lg:pb-0 pb-10">
              <Button title={'¡Quiero participar! '} onClick={handleClick} disabled={!isIpLoaded} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
