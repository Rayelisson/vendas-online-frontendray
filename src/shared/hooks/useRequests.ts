/* eslint-disable prettier/prettier */
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthType } from '../../models/login/types/AuthType';
import { ProductRoutesEnum } from '../../models/product/routes';
import { ERROR_INVALID_PASSWORD } from '../constants/errosStatus';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connection/auth';
import { connectAPIPost } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoang] = useState(false);
  const navegate = useNavigate()
  const {  setNotification } = useGlobalContext()

  const getRequest = async (url: string) => {
    setLoang(true);
    return await axios({
      method: 'get',
      url: url,
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        alert('Erro');
      });
  };

  const postRequest = async <T>(url: string, body?: unknown): Promise<T | undefined> => {
    setLoang(true);
    const returnData = await connectAPIPost<T>(url, body)
      .then((result) => {
        setNotification('Entrado...', 'success')
        navegate(ProductRoutesEnum.PRODUCT)
        alert('login sucesso')
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error')
        return undefined
      });

      setLoang(false)
      return returnData
  };

  const authRequest = async (body?: unknown): Promise<void> => {
    setLoang(true);
    await connectAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setAuthorizationToken(result.accessToken)
        navegate(ProductRoutesEnum.PRODUCT)
        alert('login sucesso')
        return result
      })
      .catch(() => {
        setNotification(ERROR_INVALID_PASSWORD, 'error')
        return undefined
      });

      setLoang(false)
  };

  return {
    loading,
    authRequest,
    getRequest,
    postRequest,
  };
};
