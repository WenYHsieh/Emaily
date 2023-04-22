const Header = () => {
  return (
    <header className='bg-white'>
      <nav className='mx-auto flex items-center justify-between p-4 lg:px-8 bg-indigo-300 text-gray-900'>
        <div className='text-lg font-bold'>Emaily</div>
        <a href='/auth/google' className='text-gray-900 hover:text-gray-700'>
          Login
        </a>
      </nav>
    </header>
  )
}

export default Header
