import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Header />
      <Login />
    </>
  );
}

export default App;
