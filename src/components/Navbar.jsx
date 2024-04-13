import React from 'react'
import logo from '../assets/books.png'
import { NavLink } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

const Navbar = () => {
  // const location = useLocation()
  // console.log(location)
  return (
    <header className="bg-stone-500 text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink to={`/`} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img
                className="h-10 w-auto"
                src={logo}
                alt="React Jobs"
              />
          <span className="ml-3 font-bold text-2xl">Shelf Share</span>
        </NavLink>
        <nav className="text-white font-semibold text-lg md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to={`/browse`} className={({isActive}) => isActive ? "mr-5 hover:text-gray-900 bg-stone-700 p-2 rounded-xl": "mr-5 hover:text-gray-900 p-2 rounded-xl" }>Browse Books</NavLink>
          <NavLink to={`/chats`} className={({isActive}) => isActive ? "mr-5 hover:text-gray-900 bg-stone-700 p-2 rounded-xl": "mr-5 hover:text-gray-900 p-2 rounded-xl"}>Chats</NavLink>
          <NavLink to={`/add-book`} className={({isActive}) => isActive ? "mr-5 hover:text-gray-900 bg-stone-700 p-2 rounded-xl": "mr-5 hover:text-gray-900 p-2 rounded-xl"}>Add Books</NavLink>
          <NavLink to={`/dashboard`} className={({isActive}) => isActive ? "mr-5 hover:text-gray-900 bg-stone-700 p-2 rounded-xl": "mr-5 hover:text-gray-900 p-2 rounded-xl"}>Dashboard</NavLink>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LogOut
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar