import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = { currentUser: null, status: '', error: null } as {
  currentUser: object | null | false
  status: string
  error: any
}

// 取得目前登入使用者的資料
export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async () => {
    const response = await axios.get('/api/currentUser')
    return response.data || false
  }
)

// 成功付款後，將 stripe 回的 token 傳到後端，將回傳的使用者資料存起來
export const handleToken = createAsyncThunk(
  'auth/handleToken',
  async (token: object) => {
    const response = await axios.post('/api/stripe', token)
    return response.data || false
  }
)

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.currentUser = action.payload
      })
      .addCase(handleToken.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.currentUser = action.payload
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default slice.reducer
