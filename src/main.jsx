import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'sonner'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BoardTask from './pages/boardTask'
import TaskPage from './pages/TaskPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BoardTask />,
  },
  {
    path: '/tasks',
    element: <TaskPage />,
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>,
)
