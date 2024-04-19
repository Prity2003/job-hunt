import { createBrowserRouter } from "react-router-dom";
import Login from '../pages/login';
import Register from "../pages/register";
import HomeLayout from "../layouts/HomeLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/register",
      element: <Register />,
    },

    {
      path: "/home",
      element: <HomeLayout />,
    }
  ]);