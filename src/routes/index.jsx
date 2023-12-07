import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// layouts
import { RootLayout } from '@/layouts';

// pages
import Home from '@/pages/Home';
import Questionary from '@/pages/Questionary/Index';
import Opinion from '@/pages/Opinion';
import Login from '@/pages/Login/Login';
import Recovery from '@/pages/RecoveryPass/Recovery';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/cuestionario" element={<Questionary />} />
      <Route path="/opinion" element={<Opinion />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recovery" element={<Recovery />} />
    </Route>
  )
);
