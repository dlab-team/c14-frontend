// layouts
import { AdminLayout, AuthLayout, RootLayout } from '@/layouts';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Admin from '@/pages/Admin/Admin';
import Forgot from '@/pages/ForgotPass/Forgot';
// pages
import Home from '@/pages/Home';
import Login from '@/pages/Login/Login';
import Opinion from '@/pages/Opinion';
import OppositeQuestions from '@/pages/OppositeQuestions/OppositeQuestions';
import Questionary from '@/pages/Questionary/Index';
import Recovery from '@/pages/RecoveryPass/Recovery';

// admin pages
import UserControl from '@/pages/Admin/UserControl';
import Phrases from '@/pages/Admin/Phrases/Phrases';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="cuestionario" element={<Questionary />} />
        <Route path="opinion" element={<Opinion />} />
        <Route path="opposite" element={<OppositeQuestions />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="/auth/login" replace={true} />} />
        <Route path="login" element={<Login />} />
        <Route path="recovery/:token" element={<Recovery />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="*" element={<Navigate to="/auth/login" replace={true} />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="home" element={<Admin />} />
        <Route path="phrases" element={<Phrases />} />
        <Route path="users" element={<UserControl />} />
      </Route>
    </>
  )
);
