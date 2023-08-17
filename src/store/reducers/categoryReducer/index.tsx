/* eslint-disable prettier/prettier */


import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CategoryType } from '../../../shared/types/CategoryType'


interface CategoryState {
    categories: CategoryType[]
}

// Define the initial state using that type
export const initialState: CategoryState = {
  categories: [],
}

export const counterSlice = createSlice({
  name: 'categoryReducer',
  initialState,
  reducers: {
    setCategoriesAction: (state, action: PayloadAction<CategoryType[]>) => {
      state.categories = action.payload
    },
  },
})

export const { setCategoriesAction } = counterSlice.actions


export default counterSlice.reducer