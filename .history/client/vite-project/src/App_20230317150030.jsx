import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const theme = ([theme, setTheme] = useState(null));

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme;
    }
  });

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
    <div className="App">
      <h1 className="">Hello World!</h1>
    </div>
  );
}

export default App;
