import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ROI from '../pages/ROI'
import InputState from '../pages/InputState'
import CallToAction from '../pages/CallToAction'
import ScrollToTop from '../components/ScrollToTop'

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
    <Routes>
      <Route path='/' element={<InputState />} />
      <Route path='/next-steps' element={<CallToAction />} />
    </Routes>
    </>
  )
}

export default AppRoutes