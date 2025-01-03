import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home'
import About from '../component/About'
const RouterUses = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/about' element={<About></About>}/>
     </Routes>
    </div>
  )
}

export default RouterUses
