import "./App.css";
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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminSignin from "./pages/admin-methods/AdminSignin";
import { AdminDashboard } from "./pages/admin-methods/AdminDashboard";

function App() {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <>
      <Header />
      <AdminDashboard />
    </>
  );
}

export default App;

// <Router>
//         <Routes>
//           <Route exact path="/signin" Component={Signin} />
//           <Route exact path="/" Component={Signin} />

//           <Route exact path="/signup" Component={Signup} />

//           <Route exact path="/admin/signin" Component={AdminSignin} />

//           {user && (
//             <>
//               {/* <ForgotPassword /> */}
//               <Route exact path="/forgotpassword" Component={ForgotPassword} />
//               <Route
//                 exact
//                 path="/password/reset/:token"
//                 Component={ResetPassword}
//               />
//               <Route exact path="/myprofile" Component={MyProfile} />
//               <Route
//                 exact
//                 path="/myprofile/update"
//                 Component={(UpdatePassword, UpdateUser)}
//               />
//               <Route
//                 exact
//                 path="/admin/getallusers"
//                 Component={FetchAllUsers}
//               />
//               <Route exact path="/admin/user/:id" Component={FetchSingleUser} />
//               <Route
//                 exact
//                 path="/admin/user/:id"
//                 Component={DeleteSingleUser}
//               />
//             </>
//           )}
//         </Routes>
//       </Router>
