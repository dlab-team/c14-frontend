import { Outlet, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore'
import { useEffect } from 'react';

export const AdminLayout = () => {

  const navigate = useNavigate()
  const { user } = useAuthStore()
  useEffect(() => {
    if (!user || user === null) {
      navigate('/auth/login')
    }
  } , [user, navigate])

  return <Outlet />;
};
