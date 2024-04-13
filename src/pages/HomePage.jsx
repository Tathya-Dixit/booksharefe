import React from 'react'
import Hero from '../components/Hero'
import BooksList from '../components/BooksList'
import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <BooksList isHome = { true }/>
        <Testimonials/>
    </>
  )
}

export default HomePage