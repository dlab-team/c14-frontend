import { CiCirclePlus, CiEdit } from 'react-icons/ci';
import { useEffect, useState } from 'react';

import AdminHeader from '@/components/admin/AdminHeader';
import { IoClose } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { Toaster } from 'sonner';
import { createOptionSchema } from '@/schemas/createOptionSchema';
import { editOptionSchema } from '@/schemas/editOptionSchema';
import useCreateOption from '@/hooks/OptionsHook/useCreateOption';
import useDeleteOption from '@/hooks/OptionsHook/useDeleteOption';
import useEditOption from '@/hooks/OptionsHook/useEditOption';
import { useForm } from 'react-hook-form';
import useGetOptions from '@/hooks/OptionsHook/useGetOptions';
import useGetPolyId from '@/hooks/useGetPolyId';
import { useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

const OptPolynomials = () => {
  const { polynomialsId } = useParams();
  const { data: options, isLoading, isError } = useGetOptions();
  const { data: polyId, isLoading: loadingPoly, isError: errorPoly } = useGetPolyId(polynomialsId);
  const { mutate: mutateCreate } = useCreateOption();
  const { mutate: mutateEdit } = useEditOption();
  const { mutate: mutateDelete } = useDeleteOption();

  const [poly, setPoly] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editOption, setEditOption] = useState({ name: '', group: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validationSchema, setValidationSchema] = useState(createOptionSchema);

  useEffect(() => {
    if (polyId) {
      setPoly([polyId]);
    }
  }, [polyId]);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: isEditing ? editOption?.name || '' : '',
      group: isEditing ? editOption?.group || '' : '',
    },
    resolver: yupResolver(validationSchema),
  });

  const toggleModal = (option = null) => {
    const isEditingOption = option !== null;
    setIsEditing(isEditingOption);
    setEditOption(isEditingOption ? option : null);
    const newValidationSchema = isEditingOption ? editOptionSchema : createOptionSchema;
    setValidationSchema(newValidationSchema);
    reset({
      name: isEditingOption ? option?.name || '' : '',
      group: isEditingOption ? option?.group || '' : '',
    });
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setValidationSchema(createOptionSchema);
  };

  const deleteOpt = async id => {
    const status = window.confirm(`¿Estás seguro de eliminar la opción?`);
    if (status) {
      mutateDelete(id);
    }
  };

  const onSubmit = handleSubmit(async payload => {
    try {
      if (isEditing) {
        mutateEdit({
          id: editOption.id,
          payload: { ...payload, polynomialId: polynomialsId, active: true },
        });
      } else {
        mutateCreate({
          ...payload,
          polynomialId: polynomialsId,
          active: true,
        });
      }
      toggleModal(null);
      closeModal();
    } catch (error) {
      console.error({ error });
    }
    return true;
  });

  if (isLoading && loadingPoly) {
    return <p>Loading...</p>;
  }

  if (isError && errorPoly) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      <AdminHeader
        title="Opciones de polinomios"
        description="Puedes agregar, modificar o eliminar opciones"
      />
      <div className="flex relative overflow-x-auto  p-3 my-8  w-5/6 mx-auto xl:justify-end justify-center">
        <button
          className="bg-black px-4 py-2 rounded-2xl text-white text-xl font-bold flex justify-center items-center"
          onClick={() => toggleModal(null)}
        >
          Crear una opción <CiCirclePlus />
        </button>
      </div>
      <div className="relative overflow-x-auto rounded-lg p-3 bg-white border-2 w-5/6 mx-auto">
        <table className="table-auto w-full text-sm text-center text-gray-500 ">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-righ dark:text-black">
            Polinomio
          </caption>
          <thead className="text-xs text-gray-900 border-y-3 border-black">
            <tr>
              <th scope="col" className="hidden sm:table-cell px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="hidden sm:table-cell px-6 py-3">
                Politico
              </th>
              <th scope="col" className="hidden md:table-cell px-6 py-3">
                Estado
              </th>
            </tr>
          </thead>
          <tbody className="text-#5C5E64 divide-y divide-slate-#5C5E64 px-6 border-t">
            {poly &&
              poly?.map(pol => (
                <tr key={pol?.id}>
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap w-72">
                    {pol.name}
                  </th>
                  <td className="hidden sm:table-cell px-6 py-4 font-medium whitespace-nowrap">
                    {pol.political ? 'si' : 'no'}
                  </td>
                  <td className="hidden md:table-cell px-6 py-4 font-medium whitespace-nowrap">
                    {pol.activo ? 'activo' : 'inactivo'}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="relative overflow-x-auto rounded-lg p-3 my-14 bg-white border-2 w-5/6 mx-auto">
        <table className="table-auto w-full text-sm text-gray-500 overflow-x-scroll text-center">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right dark:text-black">
            Opciones del Polinomio
          </caption>
          <thead className="text-xs text-gray-900 border-y-3 border-black">
            <tr>
              <th scope="col" className="hidden sm:table-cell px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="hidden md:table-cell px-6 py-3">
                Grupo
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="text-#5C5E64 divide-y divide-slate-#5C5E64 px-6 border-t">
            {options &&
              options.map(
                opt =>
                  poly.length > 0 &&
                  poly[0].id === opt.polynomialId && (
                    <tr key={opt?.id}>
                      <td className="px-6 py-4 font-medium sm:whitespace-nowrap w-72">
                        {opt.name}
                      </td>
                      <td className="hidden sm:table-cell px-6 py-4 font-medium sm:whitespace-nowrap">
                        {opt.group}
                      </td>

                      <td className="px-6 py-4 font-medium sm:whitespace-nowrap flex justify-center items-center">
                        <div className="flex gap-3">
                          <button
                            className="border border-black rounded-md"
                            onClick={() => toggleModal(opt)}
                          >
                            <CiEdit size={28} />
                          </button>
                          <button
                            className="border border-black rounded-md"
                            onClick={() => deleteOpt(opt.id)}
                          >
                            <MdDeleteOutline size={28} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
              )}
          </tbody>
        </table>
        <Toaster position="top-center" />
      </div>

      {isModalOpen && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50"
          onClick={toggleModal}
        />
      )}
      <div
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          isModalOpen ? '' : 'hidden'
        } fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow white border border-gray-200 ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900">
                {isEditing ? 'Editar opción' : 'Crear una nueva opción'}
              </h3>
              <button onClick={() => toggleModal()}>
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
                    defaultValue={isEditing ? editOption.name : ''}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  bg-white dark:border-gray-500 dark:placeholder-gray-400"
                    {...register('name')}
                  />
                  {errors.name && <div className="text-red-600">{errors.name.message}</div>}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Grupo</label>
                  <select
                    name="option"
                    defaultValue={isEditing ? editOption.group : ''}
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
                  {isEditing ? 'Actualizar opción' : 'Crear nueva opción'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptPolynomials;
