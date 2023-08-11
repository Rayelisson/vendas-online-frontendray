/* eslint-disable prettier/prettier */
import type { Router as RemixRouter } from '@remix-run/router';
import { useEffect } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider} from 'react-router-dom';

import { firstScreenRoutes } from './models/firstScreen/routes';
import { loginRoutes } from './models/login/routes';
import { productScreens } from './models/product/routes';
import { URL_USER } from './shared/constants/urls';
import { MethodsEnum } from './shared/enums/methods.enum';
import { verifyLoggedIn } from './shared/functions/connection/auth';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { useNotification } from './shared/hooks/useNotification';
import { useRequests } from './shared/hooks/useRequests';

const routes: RouteObject[] = [...loginRoutes]
const routesLoggedIn: RouteObject[] = [...firstScreenRoutes, ...productScreens].map((route) => ({
 ...route,
 loader: () => verifyLoggedIn,
}))

const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn])
export function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalContext()
  const { request } = useRequests()

  useEffect(() => {
     request(URL_USER, MethodsEnum.GET, setUser)
  },[])
 
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}
