import React from 'react'
import Navbar from '../Components/Navbar'
import Courses from '../Components/Courses'
import Footer from '../Components/Footer'

function Paidcourses() {
  
  return (
    <div>
        <Navbar />
    <div className='min-h-screen'>
    <Courses />
    </div>
        <Footer />
    </div>
  )
}

export default Paidcourses