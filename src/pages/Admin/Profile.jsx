import AdminHeader from '@/components/admin/AdminHeader';
import { InputLabel } from '@/components/admin/InputLabel';
import Button from '@/layouts/Button';
import useAuthStore from '@/store/useAuthStore';

export default function Profile() {
  const { user } = useAuthStore();
  console.log(user);
  return (
    <div className="pb-20">
      <AdminHeader
        title={`Mi perfil `}
        description="Aquí podrás personalizar la información de tu perfil."
      />
      <main className="mb-20 pb-20 h-fit">
        <div className="relative flex justify-center mb-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white w-[90%] lg:w-[950px] absolute -top-7 rounded-lg border border-[#C9C9C9] mb-20">
            <div className="grid place-content-center">
              <div>
                <div className="w-36 h-36 rounded-full bg-cyan-600 grid place-content-center mt-10">
                  <span className="text-white text-6xl">{`${user.firstName.substr(
                    0,
                    1
                  )}${user.lastName.substr(0, 1)}`}</span>
                </div>
              </div>
              <span className="font-bold text-center mt-6 text-xl">
                {user?.firstName} {user?.lastName}
              </span>
            </div>
            <form className="col-span-2 grid grid-cols-1 lg:grid-cols-2 mt-10">
              <div className="mx-10 xl:ml-0">
                <InputLabel name={'Nombre'} mt={'mt-2 mb-4 lg:mb-8'} value={user?.firstName} />
                <InputLabel name={'Apellido'} mt={'mt-2 mb-4 lg:mb-8'} value={user?.lastName} />
              </div>
              <div className="mx-10 xl:ml-0">
                <InputLabel name={'Mail'} mt={'mt-2 mb-4 lg:mb-8'} value={user?.email} />
                <InputLabel name={'Contraseña'} mt={'mt-2'} />
                <div className="flex gap-4 mt-16 mb-10">
                  <Button
                    title={'Cancelar'}
                    className={' bg-white text-black border border-slate-600'}
                  />
                  <Button title={'Guardar'} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
