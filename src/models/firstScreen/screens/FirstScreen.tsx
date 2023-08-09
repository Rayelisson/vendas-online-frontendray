/* eslint-disable prettier/prettier */


import {Spin} from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuthorizationToken } from '../../../shared/functions/connection/auth';
import { LoginRoutesEnum } from '../../login/routes';
import { ProductRoutesEnum } from '../../product/routes';

const FirstScreen = () => {
   const navigate = useNavigate()
     
  useEffect(() => {
    const toker = getAuthorizationToken()
    if (toker) {
      navigate(ProductRoutesEnum.PRODUCT)
    } else { 
      navigate(LoginRoutesEnum.LOGIN)
    }
  }, [])
  
  return <Spin />;

};

export default FirstScreen
