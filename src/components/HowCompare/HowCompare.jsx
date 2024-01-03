import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';

import backgroundHeaderMobile from '../../assets/img/admin/backgroundHeaderMobile.png';
import backgroundHeader from '../../assets/img/admin/backgroundHeader.png';
import banderas from '../../assets/img/banderas.png';
import Button from '../../layouts/Button';
import './HowCompare.css';

const HowCompare = ({ handleStep }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const radioOptions = [
    { label: 'Izquierda', value: 'Izquierda' },
    { label: 'Derecha', value: 'Derecha' },
  ];

  const onSubmit = data => {
    //Hacer algo con el data
    const ladoComparar = data.ladoComparar;
    handleStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div
        className="flex flex-col justify-center relative col-start-2 col-span-5 p-4 md:p-8 text-white h-[300px]"
        style={{ background: 'linear-gradient(to right, #DF1A84, #E23F43)' }}
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

        <div className="contenedor">
          <div className="parte-superior">
            <img width="70px" src={banderas} alt="" />
            <p>¿Con quién te quieres comparar?</p>
          </div>
          <div className="parte-inferior">
            {radioOptions.map((option, index) => (
              <label key={index}>
                <Controller
                  control={control}
                  name="ladoComparar"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      <input type="radio" {...field} value={option.value} />
                      {option.label}
                    </>
                  )}
                />
              </label>
            ))}
          </div>
          <div className="col-span-2 flex justify-end">
            <div className="w-1/3 md:w-1/6 mr-1 mt-10 ">
              <Button title={'Continuar'} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

HowCompare.propTypes = {
  handleStep: PropTypes.func,
};

export default HowCompare;
