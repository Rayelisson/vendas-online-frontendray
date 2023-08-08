import useNotification from 'antd/es/notification/useNotification';
import { RouterProvider } from 'react-router-dom';
import { router } from './App';

export function App() {
  const { contextHolder } = useNotification();

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}
