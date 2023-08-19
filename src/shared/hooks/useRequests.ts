/* eslint-disable prettier/prettier */

import { useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { AuthType } from '../../models/login/types/AuthType';
import { ProductRoutesEnum } from '../../models/product/routes';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { ERROR_INVALID_PASSWORD } from '../constants/errosStatus';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connection/auth';
import ConnectionAPI, { connectAPIPost, MethodType } from '../functions/connection/connectionAPI';

export const useRequests = () => {
  const [loading, setLoang] = useState(false);
  const { setNotification, setUser } = useGlobalReducer();

  const request = async <T>(
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: unknown,
    message?: string,
  ): Promise<T | undefined> =>{ 
    setLoang(true);

    const returObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal( 
            result
            )
        }
        if (message) {
          setNotification('Sucesso', 'success', message);
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


      const authRequest = async (navigate: NavigateFunction, body: unknown): Promise<void> => {
        setLoang(true);
    
        await connectAPIPost<AuthType>(URL_AUTH, body)
          .then((result) => {
            setUser(result?.user);
            setAuthorizationToken(result?.accessToken);
            navigate(ProductRoutesEnum.PRODUCT)
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
}

