import { PiXBold } from 'react-icons/pi';
import { Toaster } from 'sonner';
import { createOptionSchema } from '@/schemas/createOptionSchema';
import useEditOption from '@/hooks/OptionsHook/useEditOption';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Tooltip } from '@/components/Tooltip';
import { PiInfoBold } from 'react-icons/pi';

const EditOptModal = ({ isOpen, onClose, optData }) => {
  const { mutate: editOpt } = useEditOption();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: optData?.name || '',
      group: optData?.group || 'Neutro',
      description: optData?.description || '',
      color: optData?.color || '',
    },
    resolver: yupResolver(createOptionSchema),
  });

  console.log(watch('group'));

  useEffect(() => {
    if (isOpen && optData) {
      reset({ ...optData, group: optData?.group || 'Neutro' });
    }
  }, [isOpen, reset, optData]);

  const onSubmit = handleSubmit(async payload => {
    try {
      if (optData && optData.id) {
        editOpt({
          id: optData.id,
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
                Editar Opciones
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
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6"
                    {...register('name')}
                  />
                  {errors.name && <div className="text-red-600">{errors.name.message}</div>}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Extremo</label>
                  <select
                    name="group"
                    className="ring-1 ring-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 bg-white dark:placeholder-gray-400"
                    {...register('group')}
                  >
                    <option value="" disabled hidden>
                      Selecciona un grupo
                    </option>
                    <option value="Extremo 1">Extremo 1</option>
                    <option value="Extremo 2">Extremo 2</option>
                    <option value="Neutro">Neutro</option>
                  </select>
                  {errors.group && <div className="text-red-600">{errors.group.message}</div>}
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <label className=" text-gray-900 font-medium">Descripción</label>
                    <Tooltip
                      message="<b>Descripción</b><br><br>Es lo que se mostrará en el encabezado de <b>frases opuestas</b>"
                      bgColor="bg-teal-600"
                      width="w-[200px]"
                    >
                      <PiInfoBold className="w-6 h-6" />
                    </Tooltip>
                  </div>
                  <input
                    type="text"
                    name="description"
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6"
                    {...register('description')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Color</label>
                  <input
                    type="color"
                    className="p-1 h-12 w-20 block bg-white border border-gray-200 cursor-pointer rounded-lg"
                    {...register('color')}
                    defaultValue={optData?.color || ''}
                  />
                  {errors.color && <div className="text-red-600">{errors.color.message}</div>}
                </div>
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
export default EditOptModal;
