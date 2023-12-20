import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Sidebar from '@/components/Sidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import useAuthStore from '../store/useAuthStore';

const headerInfo = {
  title: 'Bienvenido, Usuario!',
  description: 'Información general sobre los resultados de los encuestados.'
}

export const AdminLayout = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  useEffect(() => {
    if (!user || user === null) {
      navigate('/auth/login');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen w-full grid grid-cols-1 xl:grid-cols-10">
      <Sidebar />
      <AdminHeader title={headerInfo.title} description={headerInfo.description} />
      <div className="xl:col-span-8 h-screen p-8 relative -z-10">
        <Outlet />
      </div>
    </div>
  );
};
