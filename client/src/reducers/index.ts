import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
})

export type storesType = ReturnType<typeof appReducer>

export default appReducer
