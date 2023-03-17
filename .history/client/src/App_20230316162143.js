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
      <h1>Products</h1>
      {/* {products.map((product, i) => {
        
      })} */}
      <h2>Name: {products[0].name}</h2>
      <h3>Brand: {products[0].brand}</h3>
      <h3>Description: {products[0].description}</h3>
      <h3>Price: {products[0].price}</h3>
      <h3>Quantity: {products[0].quantity}</h3>
      <img src={products[0].photos[0].secure_url} />
    </div>
  );
}

export default App;
