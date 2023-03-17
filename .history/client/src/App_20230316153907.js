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
      <h1>Products</h1>
      {backendTestData.products &&
        backendTestData.products.map((products, i) => {
          <p key={i}>product</p>;
        })}
    </div>
  );
}

export default App;
