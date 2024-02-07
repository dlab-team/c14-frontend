import { updatePasswordSchema, validateUpdatePasswordSchema } from '@/schemas/updatePasswordSchema';
import { useEffect, useState } from 'react';

import Button from '@/layouts/Button';
import { useForm } from 'react-hook-form';
import useUpdatePassword from '@/hooks/ProfileHook/useUpdatePassword';
import { yupResolver } from '@hookform/resolvers/yup';

export default function UpdatePass() {
  const { mutate: upPassword } = useUpdatePassword();

  const successClass = 'bg-green-600';
  const failureClass = 'bg-red-600';
  const [validationErrors, setValidationErrors] = useState(
    validateUpdatePasswordSchema({
      newPassword: '',
    })
  );
  const [edit, setEdit] = useState(true);
  const [isSamePass, setIsSamePass] = useState(false);
  const [passErrors, setPassErrors] = useState({
    minLength: failureClass,
    minMayus: failureClass,
    numbers: failureClass,
    comparison: failureClass,
  });

  useEffect(() => {
    const errors = validationErrors;
    setPassErrors({
      minLength: errors.includes('lenght_min_fail') ? failureClass : successClass,
      minMayus:
        errors.includes('minus_missing') || errors.includes('mayus_missing')
          ? failureClass
          : successClass,
      numbers: errors.includes('numbers_missing') ? failureClass : successClass,
      comparison: isSamePass ? successClass : failureClass,
    });
  }, [validationErrors, isSamePass]);

  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      newPassword: '',
      repeatPassword: '',
    },
    resolver: yupResolver(updatePasswordSchema),
  });

  const handlePassChange = e => {
    const validation = validateUpdatePasswordSchema({
      newPassword: e.target.value,
    });
    setValidationErrors(validation);
    setIsSamePass(watch('repeatPassword') === e.target.value);
  };
  const handleRepeatPassChange = e => {
    setIsSamePass(watch('newPassword') === e.target.value);
  };

  const onSubmit = handleSubmit(async payload => {
    try {
      upPassword({ ...payload });
      onEdit(false);
      reset();
    } catch (error) {
      console.error({ error });
    }
  });

  const onEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="relative flex justify-center mt-20 mb-20 pb-20 pt-20 h-fit">
      <div className="bg-white w-[90%] lg:w-[950px] absolute top-[25rem] md:top-[10rem] lg:-top-7 rounded-lg border border-[#C9C9C9] mb-20">
        <div className="grid place-content-center">
          <form className="grid grid-cols-1 lg:grid-cols-2 mt-10" onSubmit={onSubmit}>
            <div className="mx-10 xl:ml-5">
              <h2 className="font-bold mt-1 text-xl">Cambiar contraseña</h2>
              <input
                type="password"
                className={`mt-2 mb-4 border ${
                  edit ? 'border-gray-300 bg-gray-200' : 'border-gray-500 bg-white'
                } text-gray-900 text-sm rounded-lg block w-96 p-2.5 dark:border-gray-500 dark:placeholder-gray-400`}
                placeholder="Contraseña actual"
                {...register('password')}
                disabled={edit}
              />
              {!edit && errors.password && (
                <div className="text-red-600 text-xs">{errors.password.message}</div>
              )}
              <input
                type="password"
                className={`mt-2 mb-4 border ${
                  edit ? 'border-gray-300 bg-gray-200' : 'border-gray-500 bg-white'
                } text-gray-900 text-sm rounded-lg block w-96 p-2.5 dark:border-gray-500 dark:placeholder-gray-400`}
                placeholder="Nueva contraseña"
                {...register('newPassword')}
                onChange={handlePassChange}
                disabled={edit}
              />
              {!edit && errors.newPassword && watch('newPassword') === '' && (
                <div className="text-red-600 text-xs">{errors.newPassword.message}</div>
              )}
              <input
                type="password"
                className={`mt-2 mb-4 border ${
                  edit ? 'border-gray-300 bg-gray-200 w-96' : 'border-gray-500 bg-white'
                } text-gray-900 text-sm rounded-lg block w-96 px-3 py-2.5 dark:border-gray-500 dark:placeholder-gray-400`}
                placeholder="Confirmar nueva contraseña"
                {...register('repeatPassword')}
                onChange={handleRepeatPassChange}
                disabled={edit}
              />
              {!edit && errors.newPassword && watch('repeatPassword') === '' && (
                <div className={'text-red-600 text-xs'}>{errors.repeatPassword.message}</div>
              )}
            </div>
            <div className="mx-10">
              <div>
                <h2 className="font-bold mt-1 mb-3 text-xl">Requisitos para la contraseña</h2>
                <div className="flex gap-2 mt-2">
                  <div
                    className={`h-[13px] w-[13px] rounded-full ${passErrors['minLength']}`}
                  ></div>
                  <span className="text-black text-sm font-medium">Mínimo 8 caracteres</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className={`h-[13px] w-[13px] rounded-full ${passErrors['minMayus']}`}></div>
                  <span className="text-black text-sm font-medium">
                    Letras mayúsculas y minúsculas
                  </span>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className={`h-[13px] w-[13px] rounded-full ${passErrors['numbers']}`}></div>
                  <span className="text-black text-sm font-medium">Número</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <div
                    className={`h-[13px] w-[13px] rounded-full ${passErrors['comparison']}`}
                  ></div>
                  <span className="text-black text-sm font-medium">
                    Contraseñas deben ser iguales
                  </span>
                </div>
                <div className="flex gap-2 mt-20 mb-10 pr-0 xl:pr-[100px] md:pr-[150px] xl:mr-0">
                  {edit ? (
                    <Button title={'Cambiar Contraseña'} onClick={() => onEdit()} type="button" />
                  ) : (
                    <>
                      <Button title={'Cancelar'} onClick={() => onEdit()} type="button" />
                      <Button title={'Guardar'} type={'submit'} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
