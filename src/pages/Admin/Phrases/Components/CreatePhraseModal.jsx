import { PiXBold } from 'react-icons/pi';
import { Toaster } from 'sonner';
import { createPhraseSchema } from '@/schemas/createPhraseSchema';
import useCreatePhrase from '@/hooks/PhrasesHook/useCreatePhrase';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useGetAllPoly from '@/hooks/PolynomialsHook/useGetAllPoly';
import { yupResolver } from '@hookform/resolvers/yup';

const CreatePhraseModal = ({ isOpen, onClose }) => {
  const { mutate: createPhrase } = useCreatePhrase();
  const { data: polynomialsData } = useGetAllPoly();

  const defaultValuesForCreateOption = {
    text: '',
    group: '',
    polynomialId: '',
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValuesForCreateOption,
    resolver: yupResolver(createPhraseSchema),
  });

  const onSubmit = handleSubmit(async payload => {
    try {
      createPhrase({
        ...payload,
      });
      onClose();
    } catch (error) {
      console.error({ error });
    }
  });

  useEffect(() => {
    if (isOpen) {
      reset(defaultValuesForCreateOption);
    }
  }, [isOpen, reset]);

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
            <div className="flex items-center justify-between p-5 md:pb-2 rounded-t dark:border-gray-600">
              <h3 className="flex items-center mt-2 text-xl font-semibold leading-6 text-gray-900 mr-8">
                Crea una nueva frase
              </h3>
              <button
                onClick={() => onClose()}
                className="absolute top-6 right-6 hover:text-zinc-100 hover:bg-slate-900 p-1 rounded-full"
              >
                <PiXBold />
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="block leading-6 text-gray-900 font-medium">Frase</label>
                  <input
                    type="text"
                    name="text"
                    defaultValue=""
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6 mt-2"
                    {...register('text')}
                  />
                  {errors.text && <div className="text-red-600">{errors.text.message}</div>}
                </div>
                <div>
                  <label className="block leading-6 text-gray-900 font-medium">Grupo</label>
                  <select
                    name="group"
                    defaultValue=""
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6 mt-2"
                    {...register('group')}
                  >
                    <option value="" disabled hidden>
                      Selecciona un grupo
                    </option>
                    <option value="Extremo 1">Extremo 1</option>
                    <option value="Extremo 2">Extremo 2</option>
                  </select>
                  {errors.group && <div className="text-red-600">{errors.group.message}</div>}
                </div>
                <div>
                  <label className="block leading-6 text-gray-900 font-medium">Polinomio</label>
                  <select
                    name="polynomialId"
                    defaultValue=""
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6 mt-2"
                    {...register('polynomialId')}
                  >
                    <option value="" disabled hidden>
                      Selecciona un polinomio
                    </option>
                    {polynomialsData?.map(poly => (
                      <option key={poly.id} value={poly.id}>
                        {poly.name}
                      </option>
                    ))}
                  </select>
                  {errors.polynomialId && (
                    <div className="text-red-600">{errors.polynomialId.message}</div>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-slate-900 px-4 py-2 rounded-xl text-white text-xl font-bold flex justify-center items-center w-full transition-all hover:scale-105"
                >
                  Crear frase
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePhraseModal;
