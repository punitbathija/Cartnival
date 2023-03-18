import React from "react";

export const Header = () => {
  return <div>{JSON.stringify(import.meta.env.VITE_REACT_APP_BACKEND)}</div>;
};
