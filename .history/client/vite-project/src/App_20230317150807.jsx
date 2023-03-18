import "./App.css";
import { useState, useEffect } from "react";

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

  return (
    <div className="App dark:bg-slate-800 dark:text-white ">
      <button onClick={handleThemeSwitch}>Dark Mode</button>
      <h1 className="">Hello World!</h1>
    </div>
  );
}

export default App;
