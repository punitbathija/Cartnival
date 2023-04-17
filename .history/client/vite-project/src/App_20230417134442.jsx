import "./App.css";
import Header from "./Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import MyProfile from "./pages/MyProfile";
import UpdatePassword from "./pages/UpdatePassword";
import UpdateUser from "./pages/UpdateUser";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminSignin from "./pages/admin-methods/AdminSignin";
import { AdminDashboard } from "./pages/admin-methods/AdminDashboard";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Reviews from "./pages/Reviews";
import Categories from "./pages/Categories";
import AllProducts from "./pages/AllProducts";
import Electronics from "./pages/Electronics";
import HomeAndKitchen from "./pages/HomeAndKitchen";
import ClothingAndAccessories from "./pages/ClothingAndAccessories";
import Beauty from "./pages/Beauty";
import ToysAndGames from "./pages/ToysAndGames";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import MyOrders from "./pages/MyOders";
import Footer from "./Footer";

function App() {
  const user = useSelector(selectUser);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/signin" Component={Signin} />
          <Route exact path="/signup" Component={Signup} />
          <Route exact path="/admin/signin" Component={AdminSignin} />
          <Route exact path="/admin/dashboard" Component={AdminDashboard} />
          <Route exact path="/products/:id" Component={ProductPage} />
          <Route exact path="/products/:id/reviews" Component={Reviews} />
          <Route exact path="/forgotpassword" Component={ForgotPassword} />
          <Route
            exact
            path="/password/reset/:token"
            Component={ResetPassword}
          />
          <Route exact path="/myprofile" Component={MyProfile} />
          <Route
            exact
            path="/myprofile/updatepassword"
            Component={UpdatePassword}
          />
          <Route
            exact
            path="/myprofile/updateuserdetails"
            Component={UpdateUser}
          />
          <Route exact path="/categories" Component={Categories} />
          <Route exact path="/products" Component={AllProducts} />
          <Route exact path="/products/electronics" Component={Electronics} />
          <Route
            exact
            path="/products/homeandkitchen"
            Component={HomeAndKitchen}
          />
          <Route
            exact
            path="/products/clothingandaccessories"
            Component={ClothingAndAccessories}
          />

          <Route exact path="/products/beauty" Component={Beauty} />
          <Route exact path="/products/toysandgames" Component={ToysAndGames} />
          <Route exact path="/cart" Component={Cart} />
          <Route exact path="/payment/success" Component={Success} />
          <Route exact path="/payment/fail" Component={Failure} />
          <Route exact path="/myorders" Component={MyOrders} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
