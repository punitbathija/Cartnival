import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
function App() {
  return (
    <>
      <Header />
      <Signin />
      <Signup />
      <ForgotPassword />
      <ResetPassword />
    </>
  );
}

export default App;
