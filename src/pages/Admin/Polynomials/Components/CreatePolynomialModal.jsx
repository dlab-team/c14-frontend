import { PiXBold } from 'react-icons/pi';
import { Toaster } from 'sonner';
import { createPolynomialSchema } from '@/schemas/createPolynomialSchema';
import useCreatePolynomial from '@/hooks/PolynomialsHook/useCreatePolynomial';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

const CreatePolynomialModal = ({ isOpen, onClose }) => {
  const { mutate: createPoly } = useCreatePolynomial();

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createPolynomialSchema),
  });

  const [isPolitical, setIsPolitical] = useState(false);

  const onSubmit = handleSubmit(async payload => {
    try {
      createPoly(payload);
      onClose();
    } catch (error) {
      console.error({ error });
    }
  });

  const handlePoliticalChange = e => {
    const value = e.target.value;
    setIsPolitical(value === 'true');
    if (value === 'true') {
      setValue('political', value);
      setValue('active', 'true');
    } else {
      reset({ political: value });
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />
      )}
      <div
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          isOpen ? '' : 'hidden'
        } fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow white border border-gray-200 p-4">
            <div className="flex items-center justify-between p-5 md:pb-1 rounded-t dark:border-gray-600">
              <h3 className="flex items-center mt-2 text-xl font-semibold leading-6 text-gray-900 mr-8">
                Crear un nuevo Polinomio
              </h3>
              <button
                onClick={onClose}
                className="absolute top-6 right-6  hover:text-zinc-100 hover:bg-slate-900 p-1 rounded-full"
              >
                <PiXBold />
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="block leading-6 text-gray-900 font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    {...register('name')}
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6"
                  />
                  {errors.name && <div className="text-red-600">{errors.name.message}</div>}
                </div>
                <div>
                  <label className="block leading-6 text-gray-900 font-medium mb-2">Pregunta</label>
                  <input
                    type="text"
                    {...register('question')}
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6"
                  />
                  {errors.question && <div className="text-red-600">{errors.question.message}</div>}
                </div>
                <div>
                  <label className="block leading-6 text-gray-900 font-medium mb-2">
                    Tipo Político/Social
                  </label>
                  <select
                    defaultValue=""
                    {...register('political')}
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6"
                    onChange={handlePoliticalChange}
                  >
                    <option value="" disabled hidden>
                      Selecciona una opción
                    </option>
                    <option value="true">Político</option>
                    <option value="false">Social</option>
                  </select>
                  {/* {errors.political && (
                    <div className="text-red-600">{errors.political.message}</div>
                  )} */}
                </div>
                <div>
                  <label className="block leading-6 text-gray-900 font-medium mb-2">Estado</label>
                  <select
                    defaultValue=""
                    {...register('active')}
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6"
                    disabled={isPolitical}
                  >
                    <option value="" disabled hidden>
                      Selecciona una opción
                    </option>
                    <option value="true">Activo</option>
                    <option value="false">Inactivo</option>
                  </select>
                  {/* {errors.active && <div className="text-red-600">{errors.active.message}</div>} */}
                </div>
                <button
                  type="submit"
                  className="bg-slate-900 px-4 py-2 rounded-xl text-white text-xl font-bold flex justify-center items-center w-full transition-all hover:scale-105"
                >
                  Crear un nuevo polinomio
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePolynomialModal;
