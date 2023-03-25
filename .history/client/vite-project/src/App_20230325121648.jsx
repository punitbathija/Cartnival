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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <>
      <Router>
        <Switch>
          <Header />
          <Route exact path="/signin" Component={Signin} />
          <Signup />

          {user && (
            <>
              <ForgotPassword />
              <ResetPassword />
              <MyProfile />
              <UpdatePassword />
              <UpdateUser />
              <FetchAllUsers />
              <FetchSingleUser />
              <DeleteSingleUser />
            </>
          )}
        </Switch>
      </Router>
    </>
  );
}

export default App;
