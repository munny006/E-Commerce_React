import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';

import Inventry from './components/Inventry/Inventry';
import Login from './components/Login/Login';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'shop',
      element:<Shop></Shop>
      },
      {
        path:'orders',
        element:<Orders></Orders>
      },
      {
        path:'inventory',
        element:<Inventry></Inventry>
      },
      {
        path:'Login',
        element:<Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
