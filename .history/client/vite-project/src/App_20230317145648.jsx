import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const theme = ([theme, setTheme] = useState("light"));

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="App">
      <h1 className="">Hello World!</h1>
    </div>
  );
}

export default App;
