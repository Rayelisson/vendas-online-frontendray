/* eslint-disable prettier/prettier */

import { RouteObject } from "react-router-dom";

import Order from "./screen/Order";
import OrderDetail from "./screen/OrderDetail";



export enum OrderRoutesEnum {
    ORDER = '/order',
    ORDER_ID = '/order/:orderId',

}


export const orderScreens: RouteObject[] = [
 {
   path: OrderRoutesEnum.ORDER,
   element: <Order/> ,
 },
 {
  path: OrderRoutesEnum.ORDER_ID,
  element: <OrderDetail/> ,
},
]

