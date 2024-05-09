import React from 'react'
import Home from './Home/Home'
import {Routes, Route, Navigate } from 'react-router-dom'
import Paidcourses from './Paidcourses/Paidcourses'
import Signup from './Components/Signup'
import Contact from './Components/Contact'
import Toaster from "react-hot-toast"
import { useAuth } from './Context/Authprovider'
function App() {
  const [authUser,setauthUser]=useAuth();
  console.log(authUser)
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Toaster />
  <Routes>
<Route path='/' element={<Home />}></Route>
<Route path='Course' element={authUser?<Paidcourses />:<Navigate to="/Signup"/>}></Route>
<Route path='Signup' element={<Signup />}></Route>
<Route path='Contact' element={<Contact />}></Route>

  </Routes>

    </div>
   
    </>
  )
}

export default App