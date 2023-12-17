import { Link } from 'react-router-dom';
import { useState } from 'react';

import {
  FaAlignLeft,
  FaGear,
  FaRegPenToSquare,
  FaRegUser,
  FaSliders,
  FaXmark,
} from 'react-icons/fa6';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className={`h-full xl:h-[100vh] fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto  top-0 p-4 bg-zinc-100 flex flex-col justify-between z-50 ${
          showMenu ? 'left-0' : '-left-full'
        } transition-all`}
      >
        <div>
          <h1 className="text-center text-2xl font-bold text-black mb-10">
            Admin<span className="text-teal-500 text-5xl">.</span>
          </h1>
          <ul className="md:px-3 lg:px-0">
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-1 px-4 rounded-lg hover:bg-white transition-colors"
              >
                <FaSliders className="text-xl text-teal-600" />
                Polinomios y Opciones
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-1 px-4 rounded-lg hover:bg-white transition-colors"
              >
                <FaRegPenToSquare className="text-teal-600" />
                Frases y Respuestas
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-1 px-4 rounded-lg hover:bg-white transition-colors"
              >
                <FaRegUser className="text-teal-600" />
                Control de Usuarios
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-white transition-colors"
          >
            <FaGear className="text-teal-600" /> Cerrar sesión
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 text-xl text-zinc-100 bg-teal-500 p-3 rounded-full z-50"
      >
        {showMenu ? <FaXmark /> : <FaAlignLeft />}
      </button>
    </>
  );
};

export default Sidebar;
