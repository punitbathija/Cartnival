import React from "react";
import axios from "axios";

const FetchSingleOrder = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleFetchSingleOrder = async (e) => {
    const order = searchQuery;
    e.preventDefault();
    await axios
      .get(`${api}product/${order}`)
      .then((res) => {
        console.log(res.data.product);
      })
      .catch((error) => {
        setError("Cannot find produxt");
      });
  };

  return <div>FetchSingleOrder</div>;
};

export default FetchSingleOrder;
