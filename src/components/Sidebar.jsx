import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'sonner';
import useLogout from '@/hooks/useLogout';

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

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { logout } = useLogout();

  const handleLogoutClick = async () => {
    const isConfirmed = window.confirm('¿Estás seguro de que deseas salir?');
    if (isConfirmed) {
      await logout();
      toast.success('Sesión cerrada exitosamente');
    }
  };

  return (
    <>
      <div
        className={`h-full xl:h-[100vh] fixed xl:static w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-auto top-0 p-4 flex bg-white flex-col justify-between z-50 shadow-xl text-sm xl:col-span-2 text-gray-700 ${
          showMenu ? 'left-0' : '-left-full'
        } transition-all`}
      >
        <div>
          <div className="flex flex-col items-center py-10">
            <img src="/logo/logo-3xi-negro.png" alt="Logo 3xi" className="w-10" />
            <img src="/logo/criteria/criteriaLogo.png" alt="Logo Criteria" className="w-32 pt-7" />
          </div>
          <ul className="md:px-3 lg:px-0">
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
              >
                <div>
                  <PiHouse className="text-xl" />
                </div>
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
              >
                <div>
                  <PiChartBar className="text-xl" />
                </div>
                Analisis
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
              >
                <div>
                  <PiClipboardText className="text-xl" />
                </div>
                Frases y Respuestas
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
              >
                <div>
                  <PiListBullets className="text-xl" />
                </div>
                Polinomios y Opciones
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
              >
                <div>
                  <PiUsersFour className="text-xl" />
                </div>
                Control de Usuarios
              </Link>
            </li>
          </ul>
        </div>
        <nav className="text-slate-900 font-bold mr-6">
          <div className="flex items-center m-3">
            <img
              src="/userPic/userPic.png"
              alt="Imagen Usuario"
              className="w-10 border-2 border-black rounded-full mr-4"
            />
            <div>
              <span className="block text-xs font-bold mb-2">Nombre Usuario</span>
              <span className="block text-xs font-normal"> Superadmin</span>
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
