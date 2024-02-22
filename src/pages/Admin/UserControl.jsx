import { Toaster, toast } from 'sonner';

import AdminHeader from '@/components/admin/AdminHeader';
import AdminModal from '@/components/admin/AdminModal';
import { AdministrationService } from '@/services/administration.service';
import Button from '@/layouts/Button';
import { CiCirclePlus } from 'react-icons/ci';
import { FaRegTrashCan } from 'react-icons/fa6';
import { format } from 'date-fns';
import useDeleteUser from '@/hooks/useDeleteUser';
import { useForm } from 'react-hook-form';
import useGetUsers from '@/hooks/useGetUsers';
import { useState } from 'react';

const UserControl = () => {
  const { data: users, isLoading, isError, refetch } = useGetUsers();
  const { mutate: mutateDelete } = useDeleteUser();
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async ({ ...payload }) => {
    try {
      await AdministrationService.create({ ...payload });
      toast('Se enviará a su correo un enlace para generar su contraseña');
      setShowModal(!showModal);
      refetch();
    } catch (error) {
      console.error({ error });
      toast(error.message);
    }
  });

  const formatCreatedAt = createdAt => {
    return format(new Date(createdAt), 'dd-MM-yyyy');
  };

  const deleteUser = async (name, lastName, email) => {
    const status = window.confirm(
      `¿Estás seguro de eliminar el administrador "${name} ${lastName}"? Una vez eliminado, no se podrá recuperar`
    );
    if (status) {
      const payload = {
        email: email,
      };
      mutateDelete(payload);
    }
  };

  const addUser = async () => {
    setShowModal(true);
    refetch();
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      <AdminHeader
        title="Control de Usuarios"
        description="Aquí puedes crear, modificar y eliminar cuentas de usuarios."
      />
      <div className="relative overflow-x-auto rounded-lg p-3 m-3 bg-white border-2 w-5/6 mx-auto">
        <table className="table-auto w-full text-sm text-left text-gray-500">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-righ dark:text-black">
            SuperAdmin
          </caption>
          <thead className="text-xs text-gray-900 border-y-3 border-black">
            <tr>
              <th scope="col" className="hidden sm:table-cell px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="hidden sm:table-cell px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="hidden md:table-cell px-6 py-3">
                Correo Electrónico
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="text-#5C5E64 divide-y divide-slate-#5C5E64 px-6 border-t">
            {users.map(
              user =>
                user.superAdmin && (
                  <tr key={user.id}>
                    <th
                      scope="row"
                      className="hidden sm:table-cell px-6 py-4 font-medium  whitespace-nowrap w-5"
                    >
                      avatar
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap w-72">
                      {user.firstName} {user.lastName}
                    </th>
                    <td className="hidden sm:table-cell px-6 py-4 font-medium whitespace-nowrap w-32">
                      {formatCreatedAt(user.createdAt)}
                    </td>
                    <td className="hidden md:table-cell px-6 py-4 font-medium whitespace-nowrap w-72">
                      {user.email}
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap flex justify-center items-center"
                    >
                      <div className="flex flex-column gap-3"></div>
                    </th>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
      <div className="flex relative overflow-x-auto  p-3 my-8  w-5/6 mx-auto xl:justify-end justify-center">
        <button
          className="bg-black px-4 py-2 rounded-2xl text-white text-xl font-bold flex justify-center items-center transition-all hover:scale-105"
          onClick={addUser}
        >
          Agregar un nuevo usuario <CiCirclePlus />
        </button>
      </div>
      <div className="relative overflow-x-auto rounded-lg p-3 m-3 bg-white border-2 w-5/6 mx-auto">
        <table className="table-auto w-full text-sm text-left text-gray-500">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-righ dark:text-black">
            Administradores
          </caption>
          <thead className="text-xs text-gray-900 border-y-3 border-black">
            <tr>
              <th scope="col" className="hidden md:table-cell px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="hidden sm:table-cell px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="hidden md:table-cell px-6 py-3">
                Correo Electrónico
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="text-#5C5E64 divide-y divide-slate-#5C5E64 px-6 border-t">
            {users
              .filter(user => !user.superAdmin)
              .map(user => (
                <tr key={user.id}>
                  <th
                    scope="row"
                    className="hidden sm:table-cell px-6 py-4 font-medium  whitespace-nowrap w-5"
                  >
                    avatar
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap w-72">
                    {user.firstName} {user.lastName}
                  </th>
                  <td className="hidden sm:table-cell px-6 py-4 font-medium whitespace-nowrap w-32">
                    {formatCreatedAt(user.createdAt)}
                  </td>
                  <td className="hidden md:table-cell px-6 py-4 font-medium whitespace-nowrap w-72">
                    {user.email}
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap flex justify-center items-center"
                  >
                    <div className="flex flex-column gap-3">
                      <button
                        className="border hover:border-black border-white rounded-md transition-all hover:scale-105"
                        onClick={() => deleteUser(user.firstName, user.lastName, user.email)}
                      >
                        <FaRegTrashCan size={28} color="Crimson" />
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
        <Toaster position="top-center" />
      </div>
      {showModal && (
        <AdminModal setShowModal={setShowModal} title={'Agregar administrador'}>
          <form onSubmit={onSubmit} className="grid gap-y-3">
            <div>
              <label className="block leading-6 text-gray-900 font-medium">Nombre</label>
              <div className="mt-1">
                <input
                  className="block w-80 rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6"
                  placeholder="Ingresa el nombre"
                  {...register('firstName')}
                />
              </div>
            </div>
            <div>
              <label className="block leading-6 text-gray-900 font-medium">Apellido</label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6 py-3 px-4"
                  placeholder="Ingresa el apellido"
                  {...register('lastName')}
                />
              </div>
            </div>
            <div>
              <label className="block leading-6 text-gray-900 font-medium">
                Correo electronico
              </label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6"
                  placeholder="Ingresa el correo"
                  type="email"
                  {...register('email')}
                />
              </div>
            </div>
            <Button title={'Agregar'} className={'mt-3 font-normal py-1'} />
          </form>
        </AdminModal>
      )}
    </>
  );
};

export default UserControl;
