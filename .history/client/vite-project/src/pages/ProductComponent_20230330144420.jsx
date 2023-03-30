import React from "react";

const ProductComponent = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;
  let allProducts = tokenData;
  useEffect(() => {
    async function handleFetchAllProducts() {
      const result = await axios
        .get(`${api}products`)
        .then((res) => {
          console.log(res.data.products);
        })
        .catch((error) => setError("something went wrong please refresh"));
    }
    handleFetchAllProducts();
  }, []);

  return <div className="my-4 h-96 w-96 border-2 flex m-auto"></div>;
};

export default ProductComponent;
