import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import MyProfile from "./pages/MyProfile";
import UpdatePassword from "./pages/UpdatePassword";
import UpdateUser from "./pages/UpdateUser";
function App() {
  return (
    <>
      <Header />
      <Signin />
      <Signup />
      <ForgotPassword />
      <ResetPassword />
      <MyProfile />
      <UpdatePassword />
      <UpdateUser />
    </>
  );
}

export default App;
