import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Proposal from "./pages/Proposal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "proposal",
    element: <Proposal />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
