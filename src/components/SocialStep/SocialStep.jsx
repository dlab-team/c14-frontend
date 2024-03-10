import { useState } from 'react';
import Button from '../../layouts/Button';
import PropTypes from 'prop-types';
import SocialQuestions from './SocialQuestions';
import backgroundHeader from '../../assets/img/admin/backgroundHeader.png';
import backgroundHeaderMobile from '../../assets/img/admin/backgroundHeaderMobile.png';
import { useForm } from 'react-hook-form';
import useFormStore from '@/store/useFormStore';
import useGetSocialsPolynomials from '@/hooks/useGetSocialsPolynomials';
import Loader from '@/components/Loader/Loader';

const SocialStep = ({ handleStep }) => {
  const { control, handleSubmit } = useForm();
  const setSocialCharacterization = useFormStore(state => state.setSocialCharacterization);
  const setSocialNames = useFormStore(state => state.setSocialNames);
  const { data: socialPolynomials, isLoading } = useGetSocialsPolynomials();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSubmit = () => {
    const selectedOptionNames = Object.values(selectedOptions)
      .map(option => option.name)
      .join(', ')
      .toLowerCase();
    setSocialNames(selectedOptionNames);
    setSocialCharacterization(Object.values(selectedOptions));
    handleStep();
  };

  const handleOptionSelect = (questionId, option) => {
    setSelectedOptions(prevSelectedOptions => ({
      ...prevSelectedOptions,
      [questionId]: option,
    }));
  };

  if (isLoading) return <Loader />;

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
        {socialPolynomials?.map((p, index) => (
          <SocialQuestions
            key={p.id}
            index={index}
            question={p.question}
            options={p.polynomial_options}
            control={control}
            onOptionSelect={option => handleOptionSelect(p.id, option)}
          />
        ))}

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
