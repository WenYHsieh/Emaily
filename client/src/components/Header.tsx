import { useSelector } from 'react-redux'
import { storesType } from '../reducers'
import { Link, useNavigate } from 'react-router-dom'
import Payment from './Payment'
import React from 'react'

const Header = () => {
  const navigation = useNavigate()
  const { currentUser } = useSelector((state: storesType) => ({
    ...state.func,
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

  React.useEffect(() => {
    if (currentUser) navigation('/surveys')
  }, [currentUser])

  return (
    <nav className='mx-auto flex items-center justify-between p-4 lg:px-8 shadow-lg text-gray-900 sticky top-0 z-50 w-[100%] backdrop-blur-md bg-rgba(255, 255, 255, 0.2)'>
      <Link to={`${currentUser ? '/surveys' : '/'}`}>
        <div className='text-lg font-bold'>Emaily</div>
      </Link>
      <div className='flex justify-center items-center'>
        {renderLoginBlock()}
      </div>
    </nav>
  )
}

export default Header
