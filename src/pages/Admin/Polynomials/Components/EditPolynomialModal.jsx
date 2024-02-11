import { PiXBold } from 'react-icons/pi';
import { Toaster } from 'sonner';
import { createPolynomialSchema } from '@/schemas/createPolynomialSchema';
import useEditPolynomial from '@/hooks/PolynomialsHook/useEditPolynomial';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const EditPolynomialModal = ({ isOpen, onClose, polynomialData }) => {
  const { mutate: editPoly } = useEditPolynomial();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: polynomialData || {},
    resolver: yupResolver(createPolynomialSchema),
  });

  useEffect(() => {
    if (isOpen && polynomialData) {
      reset(polynomialData);
    }
  }, [isOpen, reset, polynomialData]);

  const onSubmit = handleSubmit(async payload => {
    try {
      if (polynomialData && polynomialData.id) {
        editPoly({
          id: polynomialData.id,
          payload: { ...payload },
        });
        onClose();
      }
    } catch (error) {
      console.error({ error });
    }
  });

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
                Editar el Polinomio
              </h3>
              <button
                onClick={onClose}
                className="absolute top-6 right-6  hover:text-zinc-100 hover:bg-slate-900 p-1 rounded-full"
              >
                <PiXBold />
              </button>
            </div>
            <div className="p-3 pt-0 md:p-5">
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="block leading-6 text-gray-900 font-medium">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6"
                    {...register('name')}
                    defaultValue={polynomialData?.name || ''}
                  />
                  {errors.name && <div className="text-red-600">{errors.name.message}</div>}
                </div>
                <div>
                  <label className="block leading-6 text-gray-900 font-medium">Pregunta</label>
                  <input
                    type="text"
                    name="question"
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6"
                    {...register('question')}
                    defaultValue={polynomialData?.question || ''}
                  />
                  {errors.question && <div className="text-red-600">{errors.question.message}</div>}
                </div>
                <div>
                  <label className="block leading-6 text-gray-900 font-medium">
                    Tipo Político/Social
                  </label>
                  <select
                    name="political"
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6"
                    {...register('political')}
                    defaultValue={polynomialData?.political ? 'true' : 'false'}
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
                {!polynomialData?.political && (
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Estado</label>
                    <select
                      name="active"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400"
                      {...register('active')}
                      defaultValue={polynomialData?.active ? 'true' : 'false'}
                    >
                      <option value="" disabled hidden>
                        Selecciona una opción
                      </option>
                      <option value="true">Activo</option>
                      <option value="false">Inactivo</option>
                    </select>
                    {errors.active && <div className="text-red-600">{errors.active.message}</div>}
                  </div>
                )}

                <button
                  type="submit"
                  className="bg-slate-900 px-4 py-2 rounded-xl text-white text-xl font-bold flex justify-center items-center w-full transition-all hover:scale-105"
                >
                  Editar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditPolynomialModal;
