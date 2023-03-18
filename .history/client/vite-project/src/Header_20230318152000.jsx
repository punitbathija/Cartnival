import React, { useEffect, useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    });
  }, []);

  return (
    <div className="flex md:px-10 bg-goodwhite text-goodblack md:h-17 md:py-12 items-center h-12 justify-between">
      <nav className="flex justify-between align-middle md:justify-around md:items-center w-full">
        <div className="flex justify-between align-middle items-center">
          <div className="md:my-4 cursor-pointer md:border-2 mx-5 h-14 md:p-2 md:bg-goodwhite flex gap-1 justify-start text-2xl text-justify items-center  md:hover:text-goodwhite md:hover:bg-goodblack md:hover:rounded-lg duration-700">
            <Link href="/"> POWER PEDAL</Link>
          </div>
        </div>
        <ul
          className={
            showMenu
              ? "md:flex gap-24 font-normal md:static absolute md:p-4  text-xl md:text-2xl w-fit md:z-auto md:opacity-100 transition-all ease-in duration-500 bg-goodwhite my-12 rounded-r-lg"
              : "opacity-0 hidden top-[0px] md:flex gap-24 font-normal md:static absolute md:p-4  text-xl md:text-2xl w-fit md:z-auto md:opacity-100 transition-all ease-in duration-500"
          }
        >
          <li className="my-4 mx-6 cursor-pointer md:p-2 hover:text-goodred duration-500">
            <Link href="/about"> ABOUT</Link>
          </li>
          <li className="my-4 mx-6 cursor-pointer md:p-2 hover:text-goodred duration-500">
            <Link href="/features"> FEATURES</Link>
          </li>
          <li className="my-4 mx-6 cursor-pointer md:p-2 hover:text-goodred duration-500">
            <Link href="/products"> PRODUCTS</Link>
          </li>
          <li className="my-4 mx-6 cursor-pointer md:p-2 hover:text-goodred duration-500">
            <Link href="/reviews">REVIEWS</Link>
          </li>
        </ul>
      </nav>
      <div
        onClick={() => setShowMenu(!showMenu)}
        size={40}
        name="menu"
        className="my-4 md:hidden cursor-pointer block mx-0.5 hover:text-goodred"
      />
      |||
    </div>
  );
}

export default Header;
