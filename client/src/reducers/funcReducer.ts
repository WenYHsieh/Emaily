import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ISurveyForm } from '../components/surveys/formField'

const initialState = {
  currentUser: null,
  status: '',
  error: null,
  surveys: new Array(),
} as {
  currentUser: { googleId: string; credits: number } | null | false
  surveys: Array<any>
  status: string
  error: any
}

// 取得目前登入使用者的資料
export const getCurrentUser = createAsyncThunk(
  'func/getCurrentUser',
  async () => {
    const response = await axios.get('/api/currentUser')
    return response.data || false
  }
)

// 成功付款後，將 stripe 回的 token 傳到後端，將回傳的使用者資料存起來
export const handleToken = createAsyncThunk(
  'func/handleToken',
  async (token: object) => {
    const response = await axios.post('/api/stripe', token)
    return response.data || false
  }
)

// 送出 survey (發信)
export const submitSurvey = createAsyncThunk(
  'func/submitSurvey',
  async (data: { formData: ISurveyForm; navigate: Function }) => {
    const { formData, navigate } = data

    const response = await axios.post('/api/surveys', formData)
    navigate('/surveys')
    return response.data || false
  }
)

//  取得 survey 列表
export const getSurveys = createAsyncThunk('func/getSurveys', async () => {
  const response = await axios.get('/api/surveys')

  return response.data || false
})

export const slice = createSlice({
  name: 'func',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.currentUser = action.payload
      })
      .addCase(handleToken.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.currentUser = action.payload
      })
      .addCase(submitSurvey.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.currentUser = action.payload
      })
      .addCase(getSurveys.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.surveys = action.payload
      })
  },
})

export default slice.reducer
