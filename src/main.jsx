import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Home from './routes/Home'
import Services from './routes/Services'
import Contact from './routes/Contact'
import About from './routes/About'
import Error from './routes/Error'


const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/servicios',
    element: <Services />,
  },
  {
    path: '/contacto',
    element: <Contact />,
  },
  {
    path: '/nosotros',
    element: <About />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
