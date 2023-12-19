import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Sidebar from '@/components/Sidebar';
import useAuthStore from '../store/useAuthStore'

export const AdminLayout = () => {
  const navigate = useNavigate()
  const { user } = useAuthStore()
  useEffect(() => {
    if (!user || user === null) {
      navigate('/auth/login')
    }
  } , [user, navigate])

  return (
    <div className="min-h-screen w-full grid grid-cols-1 xl:grid-cols-6">
      <Sidebar />
      <div className="xl:col-span-5">
        <Outlet />
      </div>
    </div>
  );
};
