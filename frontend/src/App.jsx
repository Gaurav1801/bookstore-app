import React from 'react'
import Home from './components/home/Home'
import {Navigate, Route,Routes} from 'react-router-dom'
// import Course from './components/Course'
import Courses from './components/courses/Courses'
import Signup from './components/Signup'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './components/Context/Auth'
import About from './components/About'

export default function App() {
  const [authUser,setAuthUser]= useAuth();
  console.log(authUser)
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>} />
      <Route path='/about' element={authUser?<About/>:<Navigate to="/signup"/>} />

      <Route path='/signup' element={<Signup/>} />

      </Routes>
      <Toaster/>
    </div>
      

    </>
  )
}
