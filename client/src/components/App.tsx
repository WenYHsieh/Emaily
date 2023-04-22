import { Route, Routes } from 'react-router-dom'

const Header = () => <div>Header</div>
const Dashboard = () => <div>Dashboard</div>
const SurveyNew = () => <div>SurveyNew</div>
const Landing = () => <div>Landing</div>

const App = () => {
  return (
    <div className='App'>
      <h1>Hello</h1>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/surveyNew' element={<SurveyNew />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/header' element={<Header />} />
      </Routes>
    </div>
  )
}

export default App
