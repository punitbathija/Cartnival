import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./Header";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  console.log(process.env.REACT_APP_BACKEND);
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
