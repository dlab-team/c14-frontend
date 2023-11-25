import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// layouts
import { RootLayout } from '@/layouts';

// pages
import Home from '@/pages/Home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);
