import { useSelector } from 'react-redux'
import { storesType } from '../reducers'
import { Link } from 'react-router-dom'
import Payment from './Payment'

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
          <>
            <Payment />
            <div className='pl-3'> Credits: {currentUser.credits}</div>
            <a
              href='/api/logout'
              className='text-gray-900 hover:text-gray-700 pl-3'
            >
              Logout
            </a>
          </>
        )
    }
  }

  return (
    <header className='bg-white'>
      <nav className='mx-auto flex items-center justify-between p-4 lg:px-8 bg-indigo-200 shadow-lg text-gray-900'>
        <Link to={`${currentUser ? '/surveys' : '/'}`}>
          <a className='text-lg font-bold'>Emaily</a>
        </Link>
        <div className='flex justify-center items-center'>
          {renderLoginBlock()}
        </div>
      </nav>
    </header>
  )
}

export default Header
