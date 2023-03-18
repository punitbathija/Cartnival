import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./Header";

function App() {
  return (
    <>
      <Header />
      <div className="App dark:bg-slate-800 dark:text-white ">
        <h1 className="">Hello World!</h1>
      </div>
    </>
  );
}

export default App;
