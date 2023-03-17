import React, { useEffect, useState } from "react";

function App() {
  const [backendTestData, setBackendTestData] = useState([{}]);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => {
        setBackendTestData(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
