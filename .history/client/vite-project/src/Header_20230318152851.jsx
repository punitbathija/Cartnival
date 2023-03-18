import React from "react";

export const Header = () => {
  return (
    <>
      <div className="flex justify-center  ">
        <nav className="self-center w-full max-w-7xl  ">
          <div className="flex flex-col lg:flex-row justify-around items-center ">
            <h1 className="uppercase pl-5 py-4 text-lg font-sans font-bold">
              hero
            </h1>
            <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
              <li className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Home</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Contact</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Services</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">About</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Pricing</a>
              </li>
            </ul>
            <div className=" text-center text-base pr-5  inline-flex">
              {" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"
              >
                <i className="fa fa-twitter"></i>
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-instagram"></i>
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-facebook"></i>
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-google"></i>
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-linkedin"></i>
              </a>{" "}
            </div>
          </div>
        </nav>
      </div>
      <div className="flex justify-center   p-8 ">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row max-w-5xl justify-center items-center p-2 space-y-3 w-[100%]">
            <div className="flex flex-col  items-center lg:text-left text-center justify-between  space-y-6 px-8">
              <div className="flex flex-col items-start space-y-3">
                <div className="text-3xl md:text-5xl font-bold px-8">
                  Design is a journey of{" "}
                </div>
                <div className="text-3xl text-orange-500 md:text-5xl font-bold px-8">
                  Discovery{" "}
                </div>
                <div className="h-1 rounded-2xl w-20 bg-orange-500 ml-10"></div>
              </div>
              <button className="">
                <ion-icon
                  name="caret-forward-outline"
                  className="mt-2 p-2 bg-orange-500 rounded-full text-3xl text-white border-2 border-orange-500 hover:bg-white hover:text-orange-500"
                ></ion-icon>
              </button>
            </div>
            <div className="flex space-x-2 md:space-x-6 md:m-4 w-1/2">
              <div className=" w-96 h-60 lg:h-96  overflow-hidden ">
                <img
                  src="https://source.unsplash.com/300x400/?design"
                  className="h-full w-full"
                  alt="lol"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
