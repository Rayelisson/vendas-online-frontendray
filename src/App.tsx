import { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRoutes } from './models/login/routes';
import { useNotification } from './shared/hooks/useNotification';

const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela Principal</div>,
    errorElement: <div>Pagina Nao Encontrada</div>,
  },
];

export const router: RemixRouter = createBrowserRouter([...mainRoutes, ...loginRoutes]);
function App() {
  const { contextHolder } = useNotification();
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}
export default App;
