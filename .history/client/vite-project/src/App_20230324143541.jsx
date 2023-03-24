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
import FetchAllUsers from "./pages/admin-methods/FetchAllUsers";
import FetchSingleUser from "./pages/admin-methods/FetchSingleUser";
import DeleteSingleUser from "./pages/admin-methods/DeleteSingleUser";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
function App() {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <>
      <Header />
      <Signin />
      <Signup />

      {user && (
        <>
          <ForgotPassword />
          <ResetPassword />
          <MyProfile />
          <UpdatePassword />
          <UpdateUser />
          {/* <FetchAllUsers /> */}
          <FetchSingleUser />
          <DeleteSingleUser />
        </>
      )}
    </>
  );
}

export default App;
