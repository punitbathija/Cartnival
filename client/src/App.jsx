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
          <Route exact path="" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/admin/signin" component={AdminSignin} />
          <Route exact path="/admin/dashboard" component={AdminDashboard} />
          <Route exact path="/products/:id" component={ProductPage} />
          <Route exact path="/products/:id/reviews" component={Reviews} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route
            exact
            path="/password/reset/:token"
            component={ResetPassword}
          />
          <Route exact path="/myprofile" component={MyProfile} />
          <Route
            exact
            path="/myprofile/updatepassword"
            component={UpdatePassword}
          />
          <Route
            exact
            path="/myprofile/updateuserdetails"
            component={UpdateUser}
          />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/products" component={AllProducts} />
          <Route exact path="/products/electronics" component={Electronics} />
          <Route
            exact
            path="/products/homeandkitchen"
            component={HomeAndKitchen}
          />
          <Route
            exact
            path="/products/clothingandaccessories"
            component={ClothingAndAccessories}
          />

          <Route exact path="/products/beauty" component={Beauty} />
          <Route exact path="/products/toysandgames" component={ToysAndGames} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/payment/success" component={Success} />
          <Route exact path="/payment/fail" component={Failure} />
          <Route exact path="/myorders" component={MyOrders} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
