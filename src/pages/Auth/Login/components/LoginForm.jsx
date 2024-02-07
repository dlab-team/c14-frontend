import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/schemas/loginSchema';
import Button from '@/layouts/Button';
import { Link } from 'react-router-dom';
import useLogin from '@/hooks/useLogin';
import { Toaster } from 'sonner';

function LoginForm() {
  const title = 'Acceder';
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const loginMutation = useLogin();

  const onSubmit = async data => {
    await loginMutation.mutateAsync(data);
    reset();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-black h-20 w-20 flex items-center justify-center mb-4">
        <img src="/logo/logo-3xi-blanco.png" alt="Logo 3xi" className="h-10" />
      </div>
      <div className="flex gap-x-4 pt-4 pb-7">
        <h1 className="font-semibold text-3xl">¡Bienvenido!</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid w-full pt-4">
        <label htmlFor="email" className="text-slate-950 ml-1 font-medium text-sm">
          Email
        </label>
        <input
          type="email"
          className="border border-grey-950 h-10 rounded-xl w-full px-2"
          {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="password" className="text-slate-950 ml-1 font-medium mt-4 text-sm">
          Contraseña
        </label>
        <input
          type="password"
          className="border border-grey-950 h-10 rounded-xl w-full px-2"
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <input className="" type="checkbox" {...register('remember')} id="remember" />
            <label htmlFor="remember" className="text-slate-950 ml-1 font-medium text-xs">
              Recuérdame
            </label>
          </div>
          <Link to="/auth/forgot" className="text-slate-950 font-medium text-xs">
            ¿Olvidaste la contraseña?
          </Link>
        </div>
        <div className="flex gap-x-3 text-sm mt-10">
          <Button type="submit" title={title} />
        </div>
      </form>
      <Toaster position="top-center" />
    </div>
  );
}

export default LoginForm;
