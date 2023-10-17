import { createHashRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Proposal from './pages/Proposal'
import Timeline from './pages/Timeline'
import Guest from './pages/Guest'
import Mass from './pages/Mass'

const router = createHashRouter([
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
    path: 'timeline',
    element: <Timeline />,
  },
  {
    path: 'mass',
    element: <Mass />,
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
