import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Services from './Services'



export default function Nav() {
  return (
  <BrowserRouter>
  <Routes>
  {/* <Route path='/about' element={<div>Home12</div>}/> */}
  <Route path='/' element={<Home/>}/>
  <Route path='/services' element={<Services/>}/>
  <Route path='/about' element={<About/>}/>
</Routes>
  
  </BrowserRouter>
  )
}
