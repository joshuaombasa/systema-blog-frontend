import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import NavLayout from './components/NavLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Oneblog from './pages/OneBlog'
import Write from './pages/Write'
import NotFound from './pages/NotFound'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<NavLayout />}>
        <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='blog/:id' element={<Oneblog />} />
          <Route>
            <Route path='write' element={<Write />} />
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
