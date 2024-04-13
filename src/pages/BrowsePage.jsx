import React from 'react'
import BooksList from '../components/BooksList'
import Sidebar from '../components/Sidebar'

const BrowsePage = () => {
  return (
    <div className='grid grid-cols-4'>
      <Sidebar/>
      <div className='col-span-3'>
        <BooksList/>
      </div>
    </div>
  )
}

export default BrowsePage