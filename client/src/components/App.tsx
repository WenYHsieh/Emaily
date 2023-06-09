import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Header from './Header'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '..'
import { getCurrentUser } from '../reducers/funcReducer'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'

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
