/* eslint-disable prettier/prettier */

import axios, { AxiosRequestConfig } from "axios";

import { ERROR_ACCESS_DANIED, ERROR_CONNECTION } from "../../constants/errosStatus";
import { MethodsEnum } from "../../enums/methods.enum";
import { getAuthorizationToken } from "./auth";


export default class ConnectionAPI {
     static async call<T>(url: string, method: string, body?: unknown): Promise< T | undefined> {
        const config: AxiosRequestConfig  = {
            headers: {
                Authorization: getAuthorizationToken(),
                'Content-Type' : 'application/json',
            },
         }


          switch (method) {
              case(MethodsEnum.GET):
                return (await axios.get<T>(url, config)).data
                case(MethodsEnum.DELETE):
                return (await axios.delete<T>(url, config)).data
                case(MethodsEnum.POST):
                return (await axios.post<T>(url, body, config)).data
                case(MethodsEnum.PATCH):
                return (await axios.patch<T>(url, body, config)).data
                case(MethodsEnum.PUT):
                return (await axios.put<T>(url, body, config)).data
          }
      }

    static async connect<T>(url: string, methrod: string, body?: unknown): Promise<T | undefined> {
    return ConnectionAPI.call<T>(url, methrod, body).catch((error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                case 403:
                    throw new Error(ERROR_ACCESS_DANIED)
                default:
                    throw new Error(ERROR_CONNECTION)
             }
         }
         throw new Error(ERROR_CONNECTION)
      })
  }

 }

export const connectAPIGet = async <T>(url: string): Promise<T | undefined> =>  {
    return ConnectionAPI.connect<T>(url, MethodsEnum.GET)
}

export const connectAPIPost = async <T>(url: string, body?: unknown): Promise<T | undefined> =>  {
    return ConnectionAPI.connect<T>(url, MethodsEnum.POST, body)
}


export const connectAPIPatch = async <T>(url: string, body?: unknown): Promise<T | undefined> =>  {
    return ConnectionAPI.connect<T>(url, MethodsEnum.PATCH, body)
}

export const connectAPIPut = async <T>(url: string, body?: unknown): Promise<T | undefined> =>  {
    return ConnectionAPI.connect<T>(url, MethodsEnum.PUT, body)
}

export const connectAPIDelete = async <T>(url: string): Promise<T | undefined> =>  {
    return ConnectionAPI.connect<T>(url, MethodsEnum.DELETE)
}