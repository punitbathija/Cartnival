import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import Signin from "./pages/Signin";
import { Signup } from "./pages/Signup";
function App() {
  return (
    <>
      <Header />
      <Login />
      <Signup />
    </>
  );
}

export default App;
