import {
  PiChartBar,
  PiClipboardText,
  PiHouse,
  PiListBold,
  PiListBullets,
  PiSignOut,
  PiUsersFour,
  PiXBold,
} from 'react-icons/pi';

import { NavLink } from 'react-router-dom';
import { toast } from 'sonner';
import useAuthStore from '@/store/useAuthStore';
import useLogout from '@/hooks/useLogout';
import { useState } from 'react';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { logout } = useLogout();
  const { user } = useAuthStore();
  console.log(user);

  const handleLogoutClick = async () => {
    const isConfirmed = window.confirm('¿Estás seguro de que deseas salir?');
    if (isConfirmed) {
      logout();
      toast.success('Sesión cerrada exitosamente');
    }
  };

  return (
    <>
      <div
        className={`h-full xl:h-[100vh] fixed xl:static w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-auto top-0 p-4 flex bg-white flex-col justify-between z-50 shadow-xl text-sm xl:col-span-2 text-gray-700 ${
          showMenu ? 'left-0' : '-left-full'
        } transition-all overflow-y-scroll`}
      >
        <div>
          <div className="flex flex-col items-center py-10">
            <img src="/logo/logo-3xi-negro.png" alt="Logo 3xi" className="w-10" />
            <img src="/logo/criteria/criteriaLogo.png" alt="Logo Criteria" className="w-32 pt-7" />
          </div>
          <ul className="md:px-3 lg:px-0 space-y-1">
            <li>
              <NavLink
                to="/admin/home"
                className={({ isActive }) =>
                  `flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-slate-900 hover:text-white transition-colors ${
                    isActive && 'bg-slate-900 text-white'
                  }`
                }
              >
                <div>
                  <PiHouse className="text-xl" />
                </div>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-slate-900 hover:text-white transition-colors ${
                    isActive && 'bg-slate-900 text-white'
                  }`
                }
              >
                <div>
                  <PiChartBar className="text-xl" />
                </div>
                Analisis
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/phrases"
                className={({ isActive }) =>
                  `flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-slate-900 hover:text-white transition-colors ${
                    isActive && 'bg-slate-900 text-white'
                  }`
                }
              >
                <div>
                  <PiClipboardText className="text-xl" />
                </div>
                Frases y Respuestas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/polynomials"
                className={({ isActive }) =>
                  `flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-slate-900 hover:text-white transition-colors ${
                    isActive && 'bg-slate-900 text-white'
                  }`
                }
              >
                <div>
                  <PiListBullets className="text-xl" />
                </div>
                Polinomios y Opciones
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-slate-900 hover:text-white transition-colors ${
                    isActive && 'bg-slate-900 text-white'
                  }`
                }
              >
                <div>
                  <PiUsersFour className="text-xl" />
                </div>
                Control de Usuarios
              </NavLink>
            </li>
          </ul>
        </div>
        <nav className="text-slate-900 font-bold mt-2 mr-6">
          <div className="flex items-center m-3">
            <img
              src="/userPic/userPic.png"
              alt="Imagen Usuario"
              className="w-10 border-2 border-black rounded-full mr-4"
            />
            <div>
              <span className="block text-xs font-bold mb-1">{user?.firstName}</span>
              <span className="block text-xs font-normal">
                {user?.superAdmin ? 'Super Adminstrador' : 'Administrador'}
              </span>
            </div>
          </div>
          <button
            onClick={handleLogoutClick}
            className="flex items-center my-6 gap-4 py-2 px-4 w-full border mx-3 border-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
          >
            <PiSignOut className="text-xl" /> Cerrar sesión
          </button>
        </nav>
      </div>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 text-xl text-zinc-100 bg-slate-900 p-3 rounded-full z-50"
      >
        {showMenu ? <PiXBold /> : <PiListBold />}
      </button>
    </>
  );
};

export default Sidebar;
