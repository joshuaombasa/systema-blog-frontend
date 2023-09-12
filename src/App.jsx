import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import NavLayout from './components/NavLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Oneblog from './pages/OneBlog'
import Write from './pages/Write'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<NavLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='signup' element={<Signup />} />
          <Route path='blog/:id' element={<Oneblog />} />
          <Route>
            <Route path='write' element={<Write />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
