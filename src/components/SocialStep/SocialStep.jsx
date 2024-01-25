import './SocialStep.css';

import Button from '../../layouts/Button';
import PropTypes from 'prop-types';
import SocialQuestions from './SocialQuestions';
import backgroundHeader from '../../assets/img/admin/backgroundHeader.png';
import backgroundHeaderMobile from '../../assets/img/admin/backgroundHeaderMobile.png';
import { useForm } from 'react-hook-form';
import useFormStore from '@/store/useFormStore';
import useGetSocialsPolynomials from '@/hooks/useGetSocialsPolynomials';

const SocialStep = ({ handleStep }) => {
  const { control, handleSubmit } = useForm();
  const setSocialCharacterization = useFormStore(state => state.setSocialCharacterization);

  const { data: socialPolynomials } = useGetSocialsPolynomials();

  const onSubmit = data => {
    setSocialCharacterization(data);
    handleStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div
        className="flex flex-col justify-center relative col-start-2 col-span-5 p-4 md:p-8 text-white h-[400px]"
        style={{ background: 'linear-gradient(to right, #E23F43, #DF1A84)' }}
      >
        <img
          src={backgroundHeaderMobile}
          alt="Background Header"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />
        <img
          src={backgroundHeader}
          alt="Background Header"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />
      </div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-10 flex flex-col w-11/12 text-white text-2xl font-roboto font-semibold pb-12 sm:w-3/4">
        <SocialQuestions
          pregunta="¿Con qué Género te identificas?"
          opciones={socialPolynomials?.[0]?.polynomial_options}
          control={control}
          nombreDelControl="genero"
        />

        <SocialQuestions
          pregunta="¿En qué Región resides?"
          opciones={socialPolynomials?.[1]?.polynomial_options}
          control={control}
          nombreDelControl="region"
          className="w-full"
        />

        <SocialQuestions
          pregunta="¿En qué rango de ingresos te clasificas?"
          opciones={socialPolynomials?.[2]?.polynomial_options}
          control={control}
          nombreDelControl="rangoIngresos"
        />

        <SocialQuestions
          pregunta="¿Perteneces a un pueblo indígena?"
          opciones={socialPolynomials?.[3]?.polynomial_options}
          control={control}
          nombreDelControl="publoIndigena"
        />

        <SocialQuestions
          pregunta="¿Con qué credo te identificas?"
          opciones={socialPolynomials?.[4]?.polynomial_options}
          control={control}
          nombreDelControl="credo"
        />

        <SocialQuestions
          pregunta="¿Cual es tu estado actual?"
          opciones={socialPolynomials?.[5]?.polynomial_options}
          control={control}
          nombreDelControl="nacionalidad"
        />

        <SocialQuestions
          pregunta="¿En qué grupo laboral te clasificas?"
          opciones={socialPolynomials?.[6]?.polynomial_options}
          control={control}
          nombreDelControl="grupoLaboral"
        />

        <SocialQuestions
          pregunta="¿A que grupo etario perteneces?"
          opciones={socialPolynomials?.[7]?.polynomial_options}
          control={control}
          nombreDelControl="grupoEtario"
        />

        <SocialQuestions
          pregunta="¿Cual es tu orientación sexual?"
          opciones={socialPolynomials?.[8]?.polynomial_options}
          control={control}
          nombreDelControl="orientacionSexual"
        />
        <div className="col-span-2 flex justify-end">
          <div className="w-1/3 md:w-1/6 mr-1 mt-10">
            <Button title={'Continuar'} />
          </div>
        </div>
      </div>
    </form>
  );
};

SocialStep.propTypes = {
  handleStep: PropTypes.func,
};

export default SocialStep;
