import { useSelector } from 'react-redux'
import { storesType } from '../reducers'
import { Link } from 'react-router-dom'

const Header = () => {
  const { currentUser } = useSelector((state: storesType) => ({
    ...state.auth,
  }))

  const renderLoginBlock = () => {
    switch (currentUser) {
      case null:
        return <></>
      case false:
        return (
          <a href='/auth/google' className='text-gray-900 hover:text-gray-700'>
            Login
          </a>
        )
      default:
        return (
          <a href='/api/logout' className='text-gray-900 hover:text-gray-700'>
            Logout
          </a>
        )
    }
  }

  return (
    <header className='bg-white'>
      <nav className='mx-auto flex items-center justify-between p-4 lg:px-8 bg-indigo-300 text-gray-900'>
        <Link to={`${currentUser ? '/surveys' : '/'}`}>
          <a className='text-lg font-bold'>Emaily</a>
        </Link>
        {renderLoginBlock()}
      </nav>
    </header>
  )
}

export default Header
