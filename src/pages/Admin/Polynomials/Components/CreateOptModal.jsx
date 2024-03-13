import { PiXBold } from 'react-icons/pi';
import { Toaster } from 'sonner';
import { createOptionSchema } from '@/schemas/createOptionSchema';
import useCreateOption from '@/hooks/OptionsHook/useCreateOption';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const CreateOptionModal = ({ isOpen, onClose, selectedPolynomial }) => {
  const { mutate: createOpt } = useCreateOption();

  const defaultValuesForCreateOption = {
    name: '',
    group: '',
    description: '',
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValuesForCreateOption,
    resolver: yupResolver(createOptionSchema),
  });

  const onSubmit = handleSubmit(async payload => {
    try {
      createOpt({
        ...payload,
        polynomialId: selectedPolynomial.id,
        active: true,
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
                Crear una nueva Opción
              </h3>
              <button
                onClick={() => onClose()}
                className="absolute top-6 right-6  hover:text-zinc-100 hover:bg-slate-900 p-1 rounded-full"
              >
                <PiXBold />
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="block leading-6 text-gray-900 font-medium">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue=""
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6 mt-2"
                    {...register('name')}
                  />
                  {errors.name && <div className="text-red-600">{errors.name.message}</div>}
                </div>
                <div>
                  <label className="block leading-6 text-gray-900 font-medium">Grupo</label>
                  <select
                    name="option"
                    defaultValue=""
                    className="ring-1 ring-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 bg-white dark:placeholder-gray-400"
                    {...register('group')}
                  >
                    <option value="" disabled hidden>
                      Selecciona una opción
                    </option>
                    <option value="Extremo 1">Extremo 1</option>
                    <option value="Neutro">Neutro</option>
                    <option value="Extremo 2">Extremo 2</option>
                  </select>
                  {errors.group && <div className="text-red-600">{errors.group.message}</div>}
                </div>
                <div>
                  <label className="block leading-6 text-gray-900 font-medium">Descripción</label>
                  <input
                    type="text"
                    placeholder={'Escriba una descripción aquí...'}
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6"
                    {...register('description')}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Color</label>
                  <select
                    name="color"
                    className="ring-1 ring-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 bg-white dark:placeholder-gray-400"
                    {...register('color')}
                  >
                    <option value="" disabled hidden>
                      Selecciona un grupo
                    </option>
                    <option value="red">Rojo</option>
                    <option value="green">Verde</option>
                    <option value="yellow">Amarillo</option>
                  </select>
                  {errors.color && <div className="text-red-600">{errors.color.message}</div>}
                </div>
                <button
                  type="submit"
                  className="bg-slate-900 px-4 py-2 rounded-xl text-white text-xl font-bold flex justify-center items-center w-full transition-all hover:scale-105"
                >
                  Crear nueva opción
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateOptionModal;
