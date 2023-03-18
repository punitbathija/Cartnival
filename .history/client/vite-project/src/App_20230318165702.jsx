import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./Header";

function App() {
  return (
    <>
      <Header />
      <div className="App dark:bg-neutral-800 dark:text-white ease-in duration-200">
        <h1 className="">Hello World!</h1>
      </div>
    </>
  );
}

export default App;
