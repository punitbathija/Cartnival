import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  console.log(id);
  // const handleFetchSingleProduct = async (e) => {
  //   const product = searchQuery;
  //   e.preventDefault();
  //   await axios
  //     .get(`${api}product/${product}`)
  //     .then((res) => {
  //       console.log(res.data.product);
  //       setTokenData(res.data.product);
  //     })
  //     .catch((error) => {
  //       setError("Cannot find produxt");
  //     });
  // };

  return <div>Hello from ProductPage</div>;
};

export default ProductPage;
