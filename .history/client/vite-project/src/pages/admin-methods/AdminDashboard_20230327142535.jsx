import React, { useState } from "react";
import FetchAllUsers from "./FetchAllUsers";
import { useSelector } from "react-redux";
import { selectUser } from "../../userSlice";

export const AdminDashboard = () => {
  const user = useSelector(selectUser);
  console.log(user);
  const [showFetchAllUsers, setShowFetchAllUsers] = useState(false);

  const handleFetchAllUsers = () => {
    setShowFetchAllUsers(true);
  };

  return (
    <div className="flex flex-col gap-4 p-24 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <h1 className="text-2xl">Admin Dashboard</h1>
      <h1 className="text-xl">User Methods</h1>
      <button className="text-xl" onClick={handleFetchAllUsers}>
        Fetch All Users
      </button>
      {showFetchAllUsers && <FetchAllUsers />}
    </div>
  );
};
