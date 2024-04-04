import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RegisterScreen from "./screens/Register.component";
import HomeScreen from "./screens/HomeScreen.component";
import ProductScreen from "./screens/ProductScreen.component";
import CartScreen from "./screens/CartScreen.component";
import { Provider } from "react-redux";
import store from "./store";
import LoginScreen from "./screens/Login.component";
import ShippingScreen from "./screens/ShippingScreen.component";
import PrivateRoute from "./components/PrivateRoute.component";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/shipping" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
      </Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
