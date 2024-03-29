// layouts
import { AdminLayout, AuthLayout, RootLayout } from '@/layouts';
import { ForgotPassword, Login, RecoveryPassword } from '@/pages/Auth';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// pages
import Home from '@/pages/Home';
import Feedback from '@/pages/Admin/Feedback/Feedback';
import Acknowledgments from '@/components/Acknowledgments/Acknowledgments';
import Error404 from '@/pages/Error404/Error404';

// admin pages
import Profile from '@/pages/Admin/Profile/Profile';
import UserControl from '@/pages/Admin/UserControl';
import Wrapper from '@/pages/Questionary/Wrapper';
import Phrases from '@/pages/Admin/Phrases/Phrases';
import PolarizedPoliticalPhrases from '@/pages/Admin/PolarizedPoliticalPhrases/PolarizedPoliticalPhrases';
import PolynomialsOpt from '@/pages/Admin/Polynomials/PolynomialsOpt';
import Admin from '@/pages/Admin/Admin';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="cuestionario" element={<Wrapper />} />
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
        <Route index element={<Navigate to="/admin/home" replace={true} />} />
        <Route path="home" element={<Admin />} />
        <Route path="phrases" element={<Phrases />} />
        <Route path="users" element={<UserControl />} />
        <Route path="polynomials" element={<PolynomialsOpt />} />
        <Route path="profile" element={<Profile />} />
        <Route path="polarizedPhrases" element={<PolarizedPoliticalPhrases />} />
        <Route path="feedback" element={<Feedback />} />
      </Route>
    </>
  )
);
