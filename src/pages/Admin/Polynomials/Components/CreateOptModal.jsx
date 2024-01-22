import { IoClose } from 'react-icons/io5';
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
              <h3 className="text-xl font-semibold text-gray-900">Crear una nueva Opción</h3>
              <button onClick={() => onClose()}>
                <IoClose size={28} />
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue=""
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  bg-white dark:border-gray-500 dark:placeholder-gray-400"
                    {...register('name')}
                  />
                  {errors.name && <div className="text-red-600">{errors.name.message}</div>}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Grupo</label>
                  <select
                    name="option"
                    defaultValue=""
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  bg-white dark:border-gray-500 dark:placeholder-gray-400"
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
                <button
                  type="submit"
                  className="w-full text-white bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-800"
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