import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductComponent = () => {
  const [productData, setProductData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;
  let allProducts = productData;
  useEffect(() => {
    async function handleFetchAllProducts() {
      const result = await axios
        .get(`${api}products`)
        .then((res) => {
          console.log(res.data.products);
          setProductData(res.data.products);
        })
        .catch((error) => setError("something went wrong please refresh"));
    }
    handleFetchAllProducts();
  }, []);
  return({
{    productData &&
      allProducts.map((product) => {
        return (
          <div className="my-4 h-96 w-96 border-2 flex m-auto">
            <div key={product._id}>
              <p>Id:- {product._id}</p>
              <p>Name:- {product.name}</p>
              <p>Brand:- {product.brand}</p>
              <p>Created By:- {product.customer}</p>
              <p>Category:- {product.category}</p>
              <p>Price:- {product.price}</p>
              <p>Date:- {product.createdAt}</p>
              <p>Quantity:- {product.quantity}</p>
              <img
                className="h-[250px] w-[250px] text-center m-auto"
                src={product.photos[0].secure_url}
              ></img>
              <hr />
            </div>
          </div>
        );
      });
    
    }})
};

export default ProductComponent;
