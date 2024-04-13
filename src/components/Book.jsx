import React from 'react'
import lib from '../assets/lib.jpg'
import { Link } from 'react-router-dom'

const Book = ({ book, genres }) => {
  return (
    <Link to={`/books/${book.id}`} className="bg-gray-300 col-span-1 p-4 mx-7 my-5 rounded-xl drop-shadow-lg">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="image" className="object-cover object-center w-full h-full block rounded-xl" src={`http://127.0.0.1:8000${book.image}`}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
          <h2 className="text-gray-900 title-font text-xl font-semibold">{book.title}</h2>
          <p className="mt-1">Price : ${book.price}</p>
        </div>
    </Link>
  )
}

export default Book