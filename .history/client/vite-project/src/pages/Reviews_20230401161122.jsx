import React, { useState, useEffect } from "react";

const Reviews = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState("");
  useEffect(() => {
    const handleFetchSingleProduct = async () => {
      await axios
        .get(`${api}product/${id}`)
        .then((res) => {
          console.log(res.data.product);
          setProductData(res.data.product);
        })
        .catch((error) => {
          setError("Cannot find produxt");
        });
    };
    handleFetchSingleProduct();
  }, []);

  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  );
};

export default Reviews;
