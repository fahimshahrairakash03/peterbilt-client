import { createBrowserRouter } from "react-router-dom";
import DashboardLayOut from "../layout/DashboardLayOut";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Products from "../Pages/Category/Products";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Myorders from "../Pages/Dashboard/Myorders";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/category/:id",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayOut></DashboardLayOut>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/myorders",
        element: <Myorders></Myorders>,
      },
    ],
  },
]);

export default router;
