import React from "react";

const AddProduct = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [role, setRole] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleFetchSingleUser = async (e) => {
    const customer = searchQuery;
    e.preventDefault();
    await axios
      .get(`${api}admin/user/${customer}`)
      .then((res) => {
        console.log(res);
        setTokenData(res.data.customer);
      })
      .catch((error) => {
        setError("Cannot find user");
      });
  };

  return <div>AddProduct</div>;
};

export default AddProduct;
