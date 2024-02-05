import { Toaster, toast } from 'sonner';

import AdminHeader from '@/components/admin/AdminHeader';
import Button from '@/layouts/Button';
import UpdatePass from './Components/UpdatePass';
import { updateProfileSchema } from '@/schemas/updateProfileSchema';
import useAuthStore from '@/store/useAuthStore';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useUpdateProfile from '@/hooks/ProfileHook/useUpdateProfile';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Profile() {
  const { mutate: upProfile } = useUpdateProfile();
  const { user, setUser } = useAuthStore();
  const [edit, setEdit] = useState(true);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '' || user.firstName,
      lastName: '' || user.lastName,
      email: '' || user.email,
    },
    resolver: yupResolver(updateProfileSchema),
  });

  const onEdit = () => {
    setEdit(!edit);
  };

  const onSubmit = handleSubmit(async payload => {
    try {
      upProfile(
        { ...payload },
        {
          onSuccess: () => {
            toast.success('Información actualizada con éxito');
            setUser({
              user: { ...user, firstName: payload.firstName, lastName: payload.lastName },
            });
          },
          onError: error => {
            toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
          },
        }
      );
      setEdit(false);
    } catch (error) {
      console.error({ error });
    }
  });

  return (
    <div className="pb-20 mb-20">
      <AdminHeader
        title={`Mi perfil `}
        description="Aquí podrás personalizar la información de tu perfil."
      />
      <Toaster position="top-center" />
      <div className="mb-20 pb-20 h-fit">
        <div className="relative flex justify-center mb-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white w-[90%] lg:w-[950px] absolute -top-7 rounded-lg border border-[#C9C9C9] mb-20">
            <div className="grid place-content-center">
              <div>
                <div className="w-36 h-36 rounded-full bg-cyan-600 grid place-content-center mt-10">
                  <span className="text-white text-6xl">{`${user.firstName.charAt(
                    0
                  )}${user.lastName.charAt(0)}`}</span>
                </div>
              </div>
              <span className="font-bold text-center mt-6 text-xl">
                {user?.firstName} {user?.lastName}
              </span>
            </div>
            <form className="col-span-2 grid grid-cols-1 lg:grid-cols-2 mt-10" onSubmit={onSubmit}>
              <div className="mx-10 xl:ml-0">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                  <input
                    type="text"
                    name="firstName"
                    className={`mt-2 mb-4 lg:mb-8 border ${
                      edit ? 'border-gray-300 bg-gray-200' : 'border-gray-500 bg-white'
                    } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400`}
                    {...register('firstName')}
                    defaultValue={user?.firstName}
                    disabled={edit}
                  />
                  {errors.name && <div className="text-red-600">{errors.name.message}</div>}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Apellido</label>
                  <input
                    type="text"
                    name="lastName"
                    className={`mt-2 mb-4 lg:mb-8 border ${
                      edit ? 'border-gray-300 bg-gray-200' : 'border-gray-500 bg-white'
                    } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400`}
                    {...register('lastName')}
                    defaultValue={user?.lastName}
                    disabled={edit}
                  />
                  {errors.name && <div className="text-red-600">{errors.name.message}</div>}
                </div>
              </div>
              <div className="mx-10 xl:ml-0">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input
                    type="text"
                    name="email"
                    className="mt-2 mb-4 lg:mb-8 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-200 dark:border-gray-500"
                    {...register('email')}
                    defaultValue={user?.email}
                    disabled
                  />
                  {errors.name && <div className="text-red-600">{errors.name.message}</div>}
                </div>
                <div className="flex gap-4 mt-16 mb-10">
                  {edit ? (
                    <Button title={'Editar'} onClick={() => onEdit()} type="button" />
                  ) : (
                    <>
                      <Button title={'Cancelar'} onClick={() => onEdit()} type="button" />
                      <Button title={'Guardar'} type={'submit'} />
                    </>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <UpdatePass />
    </div>
  );
}
