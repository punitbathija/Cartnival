import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-neutral-600">
        <h1>Login</h1>
      </div>
    </>
  );
};
export default Login;
