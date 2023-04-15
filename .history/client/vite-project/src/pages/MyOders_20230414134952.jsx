import React, { useEffect, useState } from "react";
import axios from "axios";

const MyOrders = () => {
  const [orderData, setorderData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;
  useEffect(() => {
    async function handleOrders() {
      const result = await axios
        .get(`${api}myorders`)
        .then((res) => {
          setorderData(res.data.order);
          console.log(res.data.order);
        })
        .catch((error) => setError("Cannot fetch any order's"));
    }
    handleOrders();
  }, []);

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="my-2">
        <h1 className="text-3xl py-6 text-cyan-500">My Orders</h1>
        {error && <p>{error}</p>}
        {orderData &&
          tokenData.map((order) => {
            let id = product._id;
            return (
              <Link to={`/products/${id}`} key={product._id}>
                <div className="my-4 h-96 w-96 m-auto cursor-pointer">
                  <img
                    src={product.photos[0].secure_url}
                    className="p-4 h-2/3 m-auto w-2/3 rounded-xl border-2"
                  />
                  <p className="my-2 w-[50%] text-center m-auto text-cyan-500">
                    {product.name.length > 35
                      ? product.name.substring(0, 34) + "..."
                      : product.name}
                  </p>
                  <div className="my-2 w-[50%] text-center m-auto">
                    <Stack spacing={1}>
                      <Rating
                        className="text-center m-auto dark:text-white bg-transparent"
                        name="size-small read-only"
                        defaultValue={product.ratings}
                        size="small"
                      />
                    </Stack>
                  </div>
                  <p className="my-2 w-[50%] text-center m-auto font-bold">
                    ₹{product.price}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default MyOrders;
