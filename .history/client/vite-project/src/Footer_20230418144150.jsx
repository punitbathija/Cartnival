import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="border-t-2 bg-gray-50 text-center text-goodwhite md:text-2xl w-full py-5  dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono z-10 cursor-default">
      <div className="px-4 md:flex my-4 text-center justify-between align-middle mx-auto">
        <h1 className="text-2xl">Cartnival</h1>
        <ul className="md:flex gap-4 text-lg my-3 mx-28 text-cyan-500">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/products">
            <li>Shop</li>
          </Link>
          <Link to="/categories">
            <li>Category</li>
          </Link>
        </ul>
      </div>
      <p className="text-sm">
        This website is made for educational purposes and not for commerical use
      </p>

      <p className="text-sm">
        <span className="text-goodred">© 2023, Cartnival, Inc. </span>All Rights
        Reserved.
      </p>
    </div>
  );
}

export default Footer;
