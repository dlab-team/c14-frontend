// layouts
import { AdminLayout, AuthLayout, RootLayout } from '@/layouts';
import { ForgotPassword, Login, RecoveryPassword } from '@/pages/Auth';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Acknowledgments from '@/components/Acknowledgments/Acknowledgments';
import Admin from '@/pages/Admin/Admin';
import Error404 from '@/pages/Error404/Error404';
// pages
import Home from '@/pages/Home';
import Opinion from '@/pages/Opinion';
import OppositeQuestions from '@/pages/OppositeQuestions/OppositeQuestions';
import Phrases from '@/pages/Admin/Phrases/Phrases';
import PolynomialsOpt from '@/pages/Admin/Polynomials/PolynomialsOpt';
// admin pages
import Profile from '@/pages/Admin/Profile/Profile';
import Results from '@/pages/Results/Results';
import UserControl from '@/pages/Admin/UserControl';
import Wrapper from '@/pages/Questionary/Wrapper';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="cuestionario" element={<Wrapper />} />
        <Route path="opinion" element={<Opinion />} />
        <Route path="opposite" element={<OppositeQuestions />} />
        <Route path="results" element={<Results />} />
        <Route path="reconocimiento" element={<Acknowledgments />} />
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="/auth/login" replace={true} />} />
        <Route path="login" element={<Login />} />
        <Route path="recovery/:token" element={<RecoveryPassword />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="/auth/login" replace={true} />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="home" element={<Admin />} />
        <Route path="phrases" element={<Phrases />} />
        <Route path="users" element={<UserControl />} />
        <Route path="polynomials" element={<PolynomialsOpt />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>
  )
);
