import React, { useEffect, useState } from "react";

function App() {
  const [backendTestData, setBackendTestData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setBackendTestData(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Products</h1>
      {console.log(backendTestData)}
      {backendTestData.products &&
        backendTestData.products.map((product, i) => {
          <p key={i}>{product}</p>;
        })}
    </div>
  );
}

export default App;
