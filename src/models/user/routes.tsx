/* eslint-disable prettier/prettier */

import { RouteObject } from 'react-router-dom';

import User from '.';
import UserInsert from './screens/UserInsert';





export enum UserRoutesEnum {
     USER = '/user',
     USER_INSERT = '/user/insert',

}




export const useScreens: RouteObject[] = [
  {
    path: UserRoutesEnum.USER,
    element: <User />,
  },
  {
    path: UserRoutesEnum.USER_INSERT,
    element: <UserInsert />,
  },

]