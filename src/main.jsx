import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import UserContextProvider from './contexts/user-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={Router} />
    </UserContextProvider>
  </React.StrictMode>,
)
