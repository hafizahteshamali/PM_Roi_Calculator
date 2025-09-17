import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ROI from '../pages/ROI'
import InputState from '../pages/InputState'
import CallToAction from '../pages/CallToAction'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<InputState />} />
      <Route path='/next-steps' element={<CallToAction />} />
    </Routes>
  )
}

export default AppRoutes