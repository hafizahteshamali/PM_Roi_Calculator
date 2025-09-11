import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ROI from '../pages/ROI'
import InputState from '../pages/InputState'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<InputState />} />
    </Routes>
  )
}

export default AppRoutes