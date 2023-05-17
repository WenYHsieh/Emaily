import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      dashboard
      <Link to='/surveys/new' className='group'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='#1677FF'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='white'
          className='w-20 h-20 absolute bottom-20 right-20  group-hover:opacity-70 transition-color duration-200'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </Link>
    </>
  )
}

export default Dashboard
