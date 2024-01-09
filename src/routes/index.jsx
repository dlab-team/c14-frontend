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
import Wrapper from '@/pages/Questionary/Wrapper';
import Recovery from '@/pages/RecoveryPass/Recovery';
import Results from '@/pages/Results/Results';
import Error404 from '@/pages/Error404/Error404';

// admin pages
import UserControl from '@/pages/Admin/UserControl';
import Phrases from '@/pages/Admin/Phrases/Phrases';
import Analysis from '@/pages/Admin/Analysis';
import Polynomials from '@/pages/Admin/Polynomials';
import OptPolynomials from '@/pages/Admin/Polynomials/OptPolynomials';
import Profile from '@/pages/Admin/Profile';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="cuestionario" element={<Wrapper />} />
        <Route path="opinion" element={<Opinion />} />
        <Route path="opposite" element={<OppositeQuestions />} />
        <Route path="results" element={<Results />} />
        <Route path="*" element={<Error404 />} />
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
        <Route path="polynomials" element={<Polynomials />} />
        <Route path="polynomials/:polynomialsId" element={<OptPolynomials />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>
  )
);
