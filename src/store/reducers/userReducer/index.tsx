/* eslint-disable prettier/prettier */


import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserType } from '../../../models/login/types/UserTypes'




interface UserState {
    users: UserType[]
}

// Define the initial state using that type
export const initialState: UserState = {
  users: [],
}

export const counterSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload
    },
  },
})

export const { setUserAction } = counterSlice.actions


export default counterSlice.reducer