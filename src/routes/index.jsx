import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// layouts
import { AuthLayout, RootLayout, AdminLayout } from '@/layouts';

// pages
import Home from '@/pages/Home';
import Questionary from '@/pages/Questionary/Index';
import Opinion from '@/pages/Opinion';
import Login from '@/pages/Login/Login';
import Recovery from '@/pages/RecoveryPass/Recovery';
import Forgot from '@/pages/ForgotPass/Forgot'
import OppositeQuestions from '@/pages/OppositeQuestions/OppositeQuestions';
// admin pages
import Admin from '@/pages/Admin/Admin'

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
        <Route path="login" element={<Login />} />
        <Route path="recovery" element={<Recovery />} />
        <Route path="forgot" element={<Forgot />} />        
      </Route>
      <Route path="/auth" element={<AdminLayout />}>
        <Route path="admin" element={<Admin />} />     
      </Route>
    </>
  )
);
