import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import CulturalEvent from './components/CulturalEvent';
import TechnicalEvent from './components/TechnicalEvent';
import SportsEvent from './components/SportsEvent.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import EventRegistrationForm from './components/EventRegistrationForm.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      
      <Route path='' element={<HomePage/>}/>
      <Route path="/cultural-events" Component={CulturalEvent} />
      <Route path="/technical-events" Component={TechnicalEvent} />
      <Route path="/register" Component={EventRegistrationForm} />
      <Route path="/sports-events" Component={SportsEvent} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
