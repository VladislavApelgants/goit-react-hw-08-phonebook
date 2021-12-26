import { Routes, Route } from "react-router-dom";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUser } from "../redux/auth/auth-operations";

import Header from "../Header/Header";
import Login from "../../views/Login";
import Register from "../../views/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

const Home = React.lazy(() => import("../../views/Home"));
const Contacts = React.lazy(() => import("../../views/Contacts"));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="*"
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        ></Route>

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        ></Route>

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        ></Route>

        <Route
          path="/contacts"
          element={
            <React.Suspense fallback={<>...</>}>
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}
