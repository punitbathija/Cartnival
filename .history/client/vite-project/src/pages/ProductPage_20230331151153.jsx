import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  useEffect(() => {}), [];

  return <div>Hello from ProductPage</div>;
};

export default ProductPage;
