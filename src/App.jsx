import React from 'react'
import {  RouterProvider } from 'react-router-dom'
import { Router } from './routes'

const App = () => {
  const router = Router()
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
