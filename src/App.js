import React, { lazy, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { themeChange } from "theme-change";
import checkAuth from "./app/auth";
import initializeApp from "./app/init";
import About from "./features/about/About";
import Contact from "./features/contact/Contact";
import Overview from "./features/overview/Overview";

// Importing pages
const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Register = lazy(() => import("./pages/Register"));
const Documentation = lazy(() => import("./pages/Documentation"));
const HomePage = lazy(() => import("./pages/Home/HomePage"));

// Initializing different libraries
initializeApp();

// Check for login and initialize axios
const token = checkAuth();

function App() {
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/overview" element={<Overview />} />

          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />} />

          <Route
            path="*"
            element={
              <Navigate to={token ? "/app/welcome" : "/login"} replace />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
