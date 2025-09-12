import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <BrowserRouter basename="/roi-calculator">
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App