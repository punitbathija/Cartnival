import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const handleFetchSingleProduct = async (e) => {
    e.preventDefault();
    await axios
      .get(`${api}product/${id}`)
      .then((res) => {
        console.log(res.data.product);
      })
      .catch((error) => {
        setError("Cannot find produxt");
      });
  };

  return <div>Hello from ProductPage</div>;
};

export default ProductPage;
