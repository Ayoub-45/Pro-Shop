import { Outlet, Navigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
import React from "react";

function PrivateRoute() {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;