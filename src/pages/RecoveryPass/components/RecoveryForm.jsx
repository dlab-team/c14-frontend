import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../../layouts/Button';
import { recoverySchema } from '@/schemas/recoverySchema';
import { FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import  ChangedCard  from './ChangedCard';

const RecoveryForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const title = 'Restaurar Contraseña';
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(recoverySchema),
  });

  const onSubmit = handleSubmit(data => {
    console.log(data);
    alert('Contraseña restaurada!');
    reset();
    setSubmitted(true);
  });

  if (submitted) {
    return <ChangedCard />;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-x-4 pt-4 pb-2 text-center">
        <h1 className="font-semibold text-2xl">Crea una nueva contraseña</h1>
      </div>
      <div className="p-1 text-center pb-5">
        <p>La nueva contraseña debe ser diferente a la anterior</p>
      </div>
      <form onSubmit={onSubmit} className="grid w-full pt-4">
        <label htmlFor="password" className="text-slate-950 ml-1 font-medium text-sm">
          Contraseña
        </label>
        <div className="relative flex">
          <input
            type={showPassword ? 'text' : 'password'}
            className="border border-grey-950 h-10 rounded-xl w-full px-2 pr-10"
            {...register('password')}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <FaEyeSlash
              className="text-2xl cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>
        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
        <label htmlFor="password" className="text-slate-950 ml-1 font-medium mt-4 text-sm">
          Confirmar Contraseña
        </label>
        <input
          type="password"
          className="border border-grey-950 h-10 rounded-xl w-full px-2"
          {...register('repeatPassword')}
        />
        {errors.repeatPassword && <p className="text-red-600">{errors.repeatPassword.message}</p>}
        <div className="flex gap-x-3 text-sm mt-10">
          <Button type="submit" title={title} />
        </div>
      </form>
    </div>
  );
};

export default RecoveryForm;
