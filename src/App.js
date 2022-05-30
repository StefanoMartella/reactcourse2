import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./examples/ex-navigation/context/AuthContext";
import Aboutpage from "./examples/ex-navigation/pages/AboutPage";
// import ContactPage from "./examples/ex-navigation/pages/ContactPage";
import Homepage from "./examples/ex-navigation/pages/Homepage";
import PageLayout from "./examples/ex-navigation/pages/layouts/PageLayout";
import LoginPage from "./examples/ex-navigation/pages/LoginPage";
// import LazyPage from "./examples/ex-navigation/pages/LazyPage";
import NotFoundPage from "./examples/ex-navigation/pages/NotFoundPage";
// import ProfilePage from "./examples/ex-navigation/pages/ProfilePage";
// import UserPage from "./examples/ex-navigation/pages/UserPage";
import ProtectedRoute from "./examples/ex-navigation/ProtectedRoute";

// const LazyPage = lazy(async () => {
//   await new Promise((resolve) => setTimeout(resolve, 500));
//   return import("./examples/ex-navigation/pages/LazyPage");
// });

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="vh-100 bg-danger d-flex align-items-center justify-content-center">
              <h3 className="text-white">Lazy loading component...</h3>
            </div>
          }
        >
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<PageLayout />}>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Homepage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <Aboutpage />
                  </ProtectedRoute>
                }
              />
              {/* <Route path="/contact" element={<ContactPage />} />
              <Route path="/profile">
                <Route index element={<ProfilePage />} />
                <Route path=":username" element={<UserPage />} />
              </Route>
              <Route path="/lazy" element={<LazyPage />} /> */}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
