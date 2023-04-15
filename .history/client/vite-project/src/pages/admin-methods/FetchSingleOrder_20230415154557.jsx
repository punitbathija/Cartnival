import React from "react";
import axios from "axios";

const FetchSingleOrder = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  return <div>FetchSingleOrder</div>;
};

export default FetchSingleOrder;
