/* eslint-disable prettier/prettier */
import { RouteObject } from 'react-router-dom';

import FirstScreen from './screens/FirstScreen';



export const firstScreenRoutes: RouteObject[] = [
  {
    path: '/',
    element: <FirstScreen />,
    errorElement: <div>Tela não encontrada</div>,
  },
]