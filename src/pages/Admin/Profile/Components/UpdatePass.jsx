import Button from '@/layouts/Button';
import useUpdatePassword from '@/hooks/ProfileHook/useUpdatePassword';
// import useAuthStore from '@/store/useAuthStore';

export default function UpdatePass() {
  // const { user } = useAuthStore();

  const { mutate: updatePassword } = useUpdatePassword();

  return (
    <div className="mt-20 mb-20 pb-20 pt-20 h-fit">
      <div className="relative flex justify-center mb-20 pb-20">
        <div className="bg-white w-[90%] lg:w-[950px] absolute top-[25rem] md:top-[10rem] lg:-top-7 rounded-lg border border-[#C9C9C9] mb-20">
          <div className="grid place-content-center">
            <form className="grid grid-cols-1 lg:grid-cols-2 mt-10">
              <div className="mx-10 xl:ml-5">
                <h2 className="font-bold mt-1 text-xl">Cambiar contraseña</h2>
                <input
                  type="password"
                  className="border border-grey-950 h-11 rounded-xl w-[90%] px-2 my-2 text-sm"
                  placeholder="Contraseña actual"
                />
                <input
                  type="password"
                  className="border border-grey-950 h-11 rounded-xl w-[90%] px-2 my-2 text-sm"
                  placeholder="Nueva contraseña"
                />
                <input
                  type="password"
                  className="border border-grey-950 h-11 rounded-xl w-[90%] px-2 my-2 text-sm"
                  placeholder="Confirmar nueva contraseña"
                />
              </div>
              <div className="mx-10">
                <div>
                  <h2 className="font-bold mt-1 mb-3 text-xl">Requisitos para la contraseña</h2>
                  <div className="flex gap-2 mt-2">
                    <div className="h-[13px] w-[13px] rounded-full bg-purple-600"></div>
                    <span className="text-black text-sm font-medium">Mínimo 8 caracteres</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <div className="h-[13px] w-[13px] rounded-full bg-purple-600"></div>
                    <span className="text-black text-sm font-medium">
                      Letras mayusculas y minúsculas
                    </span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <div className="h-[13px] w-[13px] rounded-full bg-purple-600"></div>
                    <span className="text-black text-sm font-medium">Número</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <div className="h-[13px] w-[13px] rounded-full bg-purple-600"></div>
                    <span className="text-black text-sm font-medium">Signos (%$#¿.+_*) </span>
                  </div>
                </div>
                <div className="flex gap-4 mt-20 mb-10 justify-between w-full pl-0 xl:pl-[100px] md:pl-[150px] xl:ml-0">
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
      </div>
    </div>
  );
}
