import { useState } from 'react'
import './index.css'
import './App.css'
import HeroLogo from './components/HeroLogo'
import HeroGrid from './components/HeroGrid'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HeroGrid />}>

      </Route>
    )
  )


  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
