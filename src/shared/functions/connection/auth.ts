/* eslint-disable prettier/prettier */


import {NavigateFunction, redirect } from 'react-router-dom';

import { LoginRoutesEnum } from '../../../models/login/routes';
import { UserType } from '../../../models/login/types/UserTypes';
import { AUTHORIZACTION_KEY } from '../../constants/authorizationConstants';
import { URL_USER } from '../../constants/urls';
import { connectAPIGet } from './connectionAPI';
import { getItemStorage, removeItemStorage, setItemStorage } from './storageProxy';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZACTION_KEY);

export const setAuthorizationToken = (token?: string) => {
                if(token) {
                    setItemStorage(AUTHORIZACTION_KEY, token)
                  }
      }

export const getAuthorizationToken = () => getItemStorage(AUTHORIZACTION_KEY)

export const verifyLoggedIn = async () => {
  const token = getAuthorizationToken();
  if (!token) {
     return redirect(LoginRoutesEnum.LOGIN)
  }
  await connectAPIGet<UserType>(URL_USER).catch(() => {
    unsetAuthorizationToken()
   
  });
  const user = await connectAPIGet<UserType>(URL_USER).catch(() => {
    unsetAuthorizationToken()
    })

    if(!user) {
      return redirect(LoginRoutesEnum.LOGIN)
    }
 

  return null;
};

export const logout = (navigate: NavigateFunction) => {
    unsetAuthorizationToken()
    //location.href = '/login'
    navigate(LoginRoutesEnum.LOGIN)
}