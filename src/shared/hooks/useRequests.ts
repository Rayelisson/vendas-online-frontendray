/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthType } from '../../models/login/types/AuthType';
import { ProductRoutesEnum } from '../../models/product/routes';
import { ERROR_INVALID_PASSWORD } from '../constants/errosStatus';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connection/auth';
import ConnectionAPI, { connectAPIPost, MethodType } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoang] = useState(false);
  
  const { setNotification, setUser } = useGlobalContext();

  const request = async <T>(
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: unknown,
  ): Promise<T | undefined> => {
    setLoang(true);
    const returObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(
            result
            );
        }
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      });
    setLoang(false);
    return returObject;
  };

  const authRequest = async (body?: unknown): Promise<void> => {
    const navegate = useNavigate();
    setLoang(true);
    await connectAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setUser(result?.user);
        setAuthorizationToken(result?.accessToken);
        navegate(ProductRoutesEnum.PRODUCT);
        alert('login sucesso');
        return result;
      })
      .catch(() => {
        setNotification(ERROR_INVALID_PASSWORD, 'error');
        return undefined;
      });

    setLoang(false);
  };

  return {
    loading,
    authRequest,
    request,
  };
};
