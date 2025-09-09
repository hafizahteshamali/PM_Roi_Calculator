import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ROI from '../pages/ROI'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ROI />} />
    </Routes>
  )
}

export default AppRoutes