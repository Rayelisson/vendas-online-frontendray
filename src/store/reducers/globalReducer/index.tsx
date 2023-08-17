/* eslint-disable prettier/prettier */


import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserType } from '../../../models/login/types/UserTypes'
import { NotificationType } from '../../../shared/types/NotificationType'


interface GlobalState {
  notification?: NotificationType
  user?: UserType
}

// Define the initial state using that type
export const initialState: GlobalState = {
  notification: undefined,
  user: undefined
}

export const counterSlice = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    setNotificationAction: (state, action: PayloadAction<NotificationType>) => {
      state.notification = action.payload
    },
    setUserAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload
    },
  },
})

export const { setNotificationAction,  setUserAction} = counterSlice.actions


export default counterSlice.reducer