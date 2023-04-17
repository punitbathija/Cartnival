import React from "react";
import Link from "react-router-dom";

function Footer() {
  return (
    <div className="bg-goodblack text-center text-goodwhite md:text-2xl w-full py-5">
      <div className="px-4 md:flex my-4 text-center justify-between align-middle mx-auto">
        <h1 className="text-2xl">Cartnival</h1>
        <ul className="md:flex gap-4 text-lg my-3 mx-28 ">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/features">
            <li>Features</li>
          </Link>
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="/reviews">
            <li>Reviews</li>
          </Link>
        </ul>
      </div>
      <p className="text-sm">
        This website is made for educational purposes and not for commerical use
      </p>

      <p className="text-sm">
        <span className="text-goodred">© 2023, Power Pedal, Inc. </span>All
        Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
