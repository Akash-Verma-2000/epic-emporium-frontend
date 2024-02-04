import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import CartPage from "./pages/cart-page/CartPage";
import LoginPage from "./pages/login-page/LoginPage";
import RegisterPage from "./pages/register-page/RegisterPage";

export default function App() {


  const browserRouter = createBrowserRouter([

    {
      path: "/",
      element: <NavBar />,
      children: [{
        path: "/",
        element: <HomePage />
      },

      {
        path: "/cart",
        element: <CartPage />
      },

      {
        path: "/login",
        element: <LoginPage />
      },

      {
        path: "/register",
        element: <RegisterPage />
      }


      ]
    }

  ])

  return <>
    <Provider store={store}>

      <RouterProvider router={browserRouter} />
      
    </Provider>
  </>
}