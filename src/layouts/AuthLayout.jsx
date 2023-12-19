import Lines from '@/components/Lines';
import { Outlet } from 'react-router';

export const AuthLayout = () => {
  return (
    <div className="flex h-screen">
      <Lines />
      <div className="flex-1 flex items-center justify-center">
        <div className="border border-gray-300 shadow-xl shadow-gray-300 p-6 w-[300px] rounded-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
