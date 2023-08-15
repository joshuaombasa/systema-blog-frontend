import React, { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'

import NavLayout from './components/NavLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<NavLayout/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
