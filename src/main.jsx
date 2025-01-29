import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routers/routers.jsx'
import TutorProvider from './contextApi/TutorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TutorProvider >
      <RouterProvider router={routers}>

      </RouterProvider>
    </TutorProvider>
  </StrictMode>,
)
