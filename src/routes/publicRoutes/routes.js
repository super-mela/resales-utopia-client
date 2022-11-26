import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Products from "../../pages/Products/Products/Products";
import Register from "../../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myproducts",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);
