import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const theme = ([theme, setTheme] = useState("light"));
  return (
    <div className="App">
      <h1 className="">Hello World!</h1>
    </div>
  );
}

export default App;
