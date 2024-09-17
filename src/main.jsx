import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './page/Home.jsx'
import Loginpage from './page/Loginpage.jsx'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/",
    element: <Loginpage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
