import React from "react";

const AddProduct = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [role, setRole] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleFetchSingleUser = async (e) => {
    e.preventDefault();
    await axios
      .get(`${api}producttest`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {});
  };

  return <div>AddProduct</div>;
};

export default AddProduct;
