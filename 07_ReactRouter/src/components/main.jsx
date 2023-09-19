import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from '../About/About'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path:"",
        element: <Home/>
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
