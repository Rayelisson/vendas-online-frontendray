/* eslint-disable prettier/prettier */
import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { firstScreenRoutes } from './models/firstScreen/routes';
import { loginRoutes } from './models/login/routes';
import { productScreens } from './models/product/routes';
import { useNotification } from './shared/hooks/useNotification';


const router: RemixRouter = createBrowserRouter([...firstScreenRoutes, ...loginRoutes, ...productScreens]);

export function App() {
  const { contextHolder } = useNotification();

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}
