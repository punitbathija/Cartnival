import React from "react";
import FetchAllUsers from "./FetchAllUsers";

export const AdminDashboard = () => {
  const handleFetchAllUsers = () => {
    <FetchAllUsers />;
  };

  return (
    <div className="flex flex-col gap-4 p-24 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <h1 className="text-2xl">Admin Dashboard</h1>
      <h1 className="text-xl">User Methods</h1>
      <h1 className="text-xl" onClick={handleFetchAllUsers}>
        Fetch All Users
      </h1>
    </div>
  );
};
