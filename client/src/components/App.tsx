import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Header from './Header'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '..'
import { getCurrentUser } from '../reducers/authReducer'
import Landing from './Landing'

const Dashboard = () => <div>Dashboard</div>
const SurveyNew = () => <div>SurveyNew</div>

const App = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/surveys' element={<Dashboard />} />
          <Route path='/surveys/new' element={<SurveyNew />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
