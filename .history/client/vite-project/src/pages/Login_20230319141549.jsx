import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center  text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <div className="my-40">
        <form>
          <p className="">Email Id</p>
          <input type="text" />
          <p>Password</p>
          <input type="text" />
          <br />
          <button className="border-dashed">SignIn</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
