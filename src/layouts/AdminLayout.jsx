import Sidebar from '@/components/Sidebar';
import { Outlet } from 'react-router-dom';

export const AdminLayout = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 xl:grid-cols-6">
      <Sidebar />
      <div className="xl:col-span-5">
        <Outlet />
      </div>
    </div>
  );
};
