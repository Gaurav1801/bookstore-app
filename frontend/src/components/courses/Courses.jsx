import React from 'react'
import Navbar from '../Navbar'
import Course from '../Course'
import Footer from '../Footer'

export default function Courses() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>

      <Course/>
      </div>
      <Footer/> 
    </div>
  )
}