import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Header from './Header'

const Dashboard = () => <div>Dashboard</div>
const SurveyNew = () => <div>SurveyNew</div>
const Landing = () => <div>Landing</div>

const App = () => {
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
