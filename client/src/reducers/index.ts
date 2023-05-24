import { combineReducers } from 'redux'
import funcReducer from './funcReducer'
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
  func: funcReducer,
  form: formReducer,
})

export type storesType = ReturnType<typeof appReducer>

export default appReducer
