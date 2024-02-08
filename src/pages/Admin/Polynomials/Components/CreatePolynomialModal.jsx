import { IoClose } from 'react-icons/io5';
import { Toaster } from 'sonner';
import { createPolynomialSchema } from '@/schemas/createPolynomialSchema';
import useCreatePolynomial from '@/hooks/PolynomialsHook/useCreatePolynomial';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
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

  const handlePoliticalChange = (e) => {
    const value = e.target.value;
    setIsPolitical(value === "true");
    if (value === "true") {
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
          className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50"
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
          <div className="relative bg-white rounded-lg shadow white border border-gray-200 ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900">Crear un nuevo Polinomio</h3>
              <button onClick={onClose}>
                <IoClose size={28} />
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                  <input
                    type="text"
                    {...register('name')}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400"
                  />
                  {errors.name && <div className="text-red-600">{errors.name.message}</div>}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Pregunta</label>
                  <input
                    type="text"
                    {...register('question')}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400"
                  />
                  {errors.question && <div className="text-red-600">{errors.question.message}</div>}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Tipo Político/Social
                  </label>
                  <select
                    defaultValue=""
                    {...register('political')}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400"
                    onChange={handlePoliticalChange}
                  >
                    <option value="" disabled hidden>
                      Selecciona una opción
                    </option>
                    <option value="true">Político</option>
                    <option value="false">Social</option>
                  </select>
                  {errors.political && (
                    <div className="text-red-600">{errors.political.message}</div>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Estado</label>
                  <select
                    defaultValue=""
                    {...register('active')}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400"
                    disabled={isPolitical} 
                  >
                    <option value="" disabled hidden>
                      Selecciona una opción
                    </option>
                    <option value="true">Activo</option>
                    <option value="false">Inactivo</option>
                  </select>
                  {errors.active && <div className="text-red-600">{errors.active.message}</div>}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-800"
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
