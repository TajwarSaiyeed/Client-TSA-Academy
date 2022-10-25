import React from "react";
import { Link } from "react-router-dom";
import userPlaceHolder from "../../../assets/userPlaceHolder.png";

const Login = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ height: "110vh" }}
    >
      <form className="flex flex-col justify-center items-center p-20 gap-3 rounded-lg relative shadow-lg bg-blue-200">
        <div className="avatar placeholder absolute -top-20">
          <div className=" bg-neutral-content text-neutral-focus rounded-full shadow-lg w-32">
            <img src={userPlaceHolder} alt="" />
          </div>
        </div>
        <h1 className="text-5xl font-bold my-4 text-white drop-shadow-md">
          Sign in to Your Account
        </h1>
        <input
          type="text"
          placeholder="Enter A Email"
          className="input w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Enter A Password"
          className="input w-full max-w-xs"
        />
        <button type="submit" className="btn btn-outline btn-info text-xl">
          Sign in
        </button>
        <p className="text-red-500 drop-shadow-md text-xl">
          Don't Have An Account{" "}
          <Link className="link link-primary" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
