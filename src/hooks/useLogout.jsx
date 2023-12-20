import { useNavigate } from 'react-router';
import useAuthStore from '../store/useAuthStore';

const useLogout = () => {
  const { clearLocalStorage } = useAuthStore();
  const navigate = useNavigate();

  const logout = () => {
    clearLocalStorage();
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return { logout };
};

export default useLogout;
