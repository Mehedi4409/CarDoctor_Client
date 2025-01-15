import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './Layout/Main'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login';
import Signin from './components/Signin';
import AuthProvider from './Context/AuthProvider';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Checkout from './components/Checkout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signin',
        element: <Signin></Signin>
      },
      {
        path: '/details/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) =>fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({params}) =>fetch(`http://localhost:5000/service/${params.id}`)
      },
    ]
  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
