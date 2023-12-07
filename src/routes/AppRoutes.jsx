import { Route, Routes } from 'react-router-dom';
// layouts

import { RootLayout, AuthLayout } from '@/layouts';

// pages
import Home from '@/pages/Home';
import Questionary from '@/pages/Questionary/Index';
import Login from '@/pages/Login/Login';

function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cuestionario" element={<Questionary />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}


export default AppRoutes;