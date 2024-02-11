import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import CartPage from "./pages/cart-page/CartPage";
import CustomerLoginPage from "./pages/login-page/CustomerLoginPage";
import CustomerRegisterPage from "./pages/register-page/CustomerRegisterPage";

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
        path: "/customer/login",
        element: <CustomerLoginPage />
      },

      {
        path: "/customer/register",
        element: <CustomerRegisterPage />
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