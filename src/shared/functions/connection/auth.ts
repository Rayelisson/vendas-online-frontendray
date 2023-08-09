/* eslint-disable prettier/prettier */

import { AUTHORIZACTION_KEY } from '../../constants/authorizationConstants';
import { getItemStorage, removeItemStorage, setItemStorage } from './storageProxy';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZACTION_KEY);

export const setAuthorizationToken = (token: string) => {
                if(token) {
                    setItemStorage(AUTHORIZACTION_KEY, token)
                  }
      }

export const getAuthorizationToken = () => getItemStorage(AUTHORIZACTION_KEY)
