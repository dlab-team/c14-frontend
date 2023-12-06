/*Deje esto para probar como se veria el login sin el navbar
Borrar en el futuro cuando se cree rutas de admin
*/
import NavBar from '@/components/NavBar';
import { Outlet,useLocation } from 'react-router-dom';

export const RootLayout = () => {

  const location = useLocation(); 
  const isLoginPage = location.pathname === '/login';
  
  return (
    <>
      {!isLoginPage && <NavBar />}
      <Outlet />
    </>
  );
};

/*
import NavBar from '@/components/NavBar';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
*/