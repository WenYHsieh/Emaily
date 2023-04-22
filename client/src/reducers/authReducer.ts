import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'authReducer',
  initialState: {},
  reducers: {
    FETCH_GET_ALL_STATE: (state) => {
      return state
    },
  },
})

export const { FETCH_GET_ALL_STATE } = slice.actions

export default slice.reducer
