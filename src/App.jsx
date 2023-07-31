import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Proposal from './pages/Proposal'
import Timeline from './pages/Timeline'
import Guest from './pages/Guest'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'proposal',
    element: <Proposal />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'timeline',
    element: <Timeline />,
  },
  {
    path: 'guest',
    element: <Guest />,
  },
  {
    path: 'guest/:userId',
    element: <Guest />,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
