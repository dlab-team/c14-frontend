import { LoginService } from '../services/login.service';
import { toast } from 'sonner';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation(LoginService.clearCookies, {
    onSuccess: () => {
      toast.success('Sesión cerrada');
      setTimeout(() => {
        navigate('/');
      }, 1800);
    },
    onError: () => {
      toast.error('error');
      console.log('error');
    },
  });
};

export default useLogin;
