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

  const { products } = backendTestData;

  // const productNames = products.map((product) => (
  //   <li key={product._id}>{product.name}</li>
  // ));

  // console.log(productNames);
  return (
    <div className="App">

    </div>
  );
}

export default App;
