import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import backgroundHeaderMobile from '../../assets/img/admin/backgroundHeaderMobile.png';
import backgroundHeader from '../../assets/img/admin/backgroundHeader.png';
import banderas from '../../assets/img/banderas.png';
import Button from '../../layouts/Button';
import './StepOne.css';
import useFormStore from '@/store/useFormStore';
import useGetPoliticalOptions from '@/hooks/OptionsHook/useGetPoliticalOptions';
import { useState, useEffect } from 'react';
import { osName } from 'react-device-detect';
import { ResponseService } from '@/services/response.service';

const StepOne = ({ handleStep }) => {
  const [ip, setIp] = useState();
  const [responseCreated, setResponseCreated] = useState(false);
  const idResponse = useFormStore(state => state.responseId);
  const setIdResponse = useFormStore(state => state.setResponseId);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getIp = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setIp(data);
      } catch (error) {
        console.error('Error fetching IP:', error);
      }
    };
    getIp();
  }, []);

  useEffect(() => {
    if (ip && !responseCreated && !idResponse) {
      ResponseService.createResponse({
        os: osName,
        country: ip.country_name,
        region: ip.region,
        city: ip.city,
        finishedSocialForm: false,
        duration: 0,
      })
        .then(responseData => {
          setResponseCreated(true);
          setIdResponse(responseData);
        })
        .catch(error => {
          console.error('Error creating response:', error);
        });
    }
  }, [ip, osName, responseCreated, idResponse]);

  const { data: politicalOptions } = useGetPoliticalOptions();
  const setPoliticalCharacterization = useFormStore(state => state.setPoliticalCharacterization);
  const onSubmit = data => {
    setPoliticalCharacterization(data.politicalCharacterization);
    handleStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="flex flex-col justify-center relative col-start-2 col-span-5 p-4 md:p-8 text-white h-[300px]"
        style={{ background: 'linear-gradient(to right, #35ABC7, #4CB69A)' }}
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
          <div className="parte-superior bg-purple-500">
            <img width="70px" src={banderas} alt="" />
            <p>¿Con quién te identificas?</p>
          </div>
          <div className="parte-inferior">
            {politicalOptions?.map((option, index) => (
              <label key={index}>
                <Controller
                  control={control}
                  name="politicalCharacterization"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      <input type="radio" {...field} value={option.id} />
                      {option.name}
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

StepOne.propTypes = {
  handleStep: PropTypes.func,
};

export default StepOne;
