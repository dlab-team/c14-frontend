import AdminHeader from '@/components/admin/AdminHeader';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
import { format } from 'date-fns';
import useGetUsers from '@/hooks/useGetUsers';

const UserControl = () => {
  const { data: users, isLoading, isError, refetch } = useGetUsers();

  const formatCreatedAt = createdAt => {
    return format(new Date(createdAt), 'dd-MM-yyyy');
  };

  const deleteUser = async () => {
    alert('desea elimar el usuario?');
    refetch();
  };

  const editUser = async () => {
    alert('desea editar el usuario?');
    refetch();
  };

  const addUser = async () => {
    alert('desea agregar un usuario?');
    refetch();
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <div className="h-full">
      <AdminHeader
        title="Control de Usuarios"
        description="Aquí puedes crear, modificar y eliminar cuentas de usuarios."
      />
      <div className="overflow-x-auto rounded-lg p-3 m-3 bg-white border-2 w-5/6 mx-auto mb-20 ">
        <table className="w-full text-sm text-left text-gray-500 ">
          <caption className="p-2 text-lg font-semibold text-left rtl:text-righ dark:text-black">
            SuperAdmin
          </caption>
          <thead className="text-xs text-gray-900 border-y-3 border-black "></thead>
          <tbody className="text-#5C5E64 divide-y divide-slate-#5C5E64 px-6">
            {users.superAdmin
              ? users.map(user => (
                  <tr key={user.id}>
                    <th
                      scope="row"
                      className="hidden sm:table-cell px-6 py-4 font-medium whitespace-nowrap"
                    >
                      avatar
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                      {user.firstName} {user.lastName}
                    </th>
                    <td className="hidden sm:table-cell px-6 py-4 font-medium whitespace-nowrap">
                      {formatCreatedAt(user.createdAt)}
                    </td>
                    <td className="hidden md:table-cell px-6 py-4 font-medium whitespace-nowrap">
                      {user.email}
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                      <div className="flex flex-column gap-3">
                        <button className="border border-black rounded-md" onClick={editUser}>
                          <CiEdit size={28} />
                        </button>
                        <button className="border border-black rounded-md" onClick={deleteUser}>
                          <MdDeleteOutline size={28} />
                        </button>
                      </div>
                    </th>
                  </tr>
                ))
              : ''}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto rounded-lg p-3 m-3 w-5/6 mx-auto text-end underline">
        <button className="underline" onClick={addUser}>
          Agregar administrador
        </button>
      </div>
      <div className="relative overflow-x-auto rounded-lg p-3 m-3 bg-white border-2 w-5/6 mx-auto">
        <table className="table-auto w-full text-sm text-left text-gray-500 ">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-righ dark:text-black">
            Administradores
          </caption>
          <thead className="text-xs text-gray-900 border-y-3 border-black ">
            <tr>
              <th scope="col" className="hidden sm:table-cell px-6 py-3"></th>
              <th scope="col" className="hidden sm:table-cell px-6 py-3">
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
          <tbody className="text-#5C5E64 divide-y divide-slate-#5C5E64 px-6 border-t ">
            {users.map(user => (
              <tr key={user.id}>
                <th
                  scope="row"
                  className="hidden sm:table-cell px-6 py-4 font-medium  whitespace-nowrap"
                >
                  avatar
                </th>
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                  {user.firstName} {user.lastName}
                </th>
                <td className="hidden sm:table-cell px-6 py-4 font-medium whitespace-nowrap">
                  {formatCreatedAt(user.createdAt)}
                </td>
                <td className="hidden md:table-cell px-6 py-4 font-medium whitespace-nowrap">
                  {user.email}
                </td>
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                  <div className="flex flex-column gap-3">
                    <button className="border border-black rounded-md" onClick={editUser}>
                      <CiEdit size={28} />
                    </button>
                    <button className="border border-black rounded-md" onClick={deleteUser}>
                      <MdDeleteOutline size={28} />
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserControl;
