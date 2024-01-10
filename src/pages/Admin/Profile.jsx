import AdminHeader from '@/components/admin/AdminHeader';
import { InputLabel } from '@/components/admin/InputLabel';
import Button from '@/layouts/Button';
import useAuthStore from '@/store/useAuthStore';

export default function Profile() {
  const { user } = useAuthStore();
  console.log(user);
  return (
    <>
      <AdminHeader
        title={`Mi perfil `}
        description="Aquí podrás personalizar la información de tu perfil."
      />
      <main className="relative flex justify-center">
        <div className="grid grid-cols-3 bg-white w-[950px] h-[400px] absolute -top-7 rounded-lg border border-[#C9C9C9]">
          <div className="grid place-content-center">
            <div>
              <div className="w-36 h-36 rounded-full bg-cyan-600 grid place-content-center">
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
          <form className="col-span-2 grid grid-cols-2 mt-10">
            <div className="mr-10">
              <InputLabel name={'Nombre'} mt={'mt-2 mb-8'} value={user?.firstName} />
              <InputLabel name={'Mail'} mt={'mt-2'} value={user?.email} />
            </div>
            <div className="mr-10">
              <InputLabel name={'Apellido'} mt={'mt-2 mb-8'} value={user?.lastName} />
              <InputLabel name={'Contraseña'} mt={'mt-2'} />
              <div className="flex gap-4 mt-16">
                <Button
                  title={'Cancelar'}
                  className={' bg-white text-black border border-slate-600'}
                />
                <Button title={'Guardar'} />
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
