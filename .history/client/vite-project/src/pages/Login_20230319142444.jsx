import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center  text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <div className="my-40">
        <form>
          <p className="text-2xl">Email Id</p>
          <input type="text" className="border-2 p-2" />
          <p className="text-2xl ">Password</p>
          <input type="text" className="border-2 p-2" />
          <br />
          <button className="text-2xl border-2 my-4 p-1 bg-cyan-700">
            SignIn
          </button>
        </form>
      </div>
      <img
        src="https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="h-[250px] w-[250px] my-32"
      ></img>
    </div>
  );
};

export default Login;
