import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import userPlaceHolder from "../../../assets/userPlaceHolder.png";
import { AuthProvider } from "../../../contexts/AuthContext";

const Register = () => {
  const { user, loader, setLoader } = useContext(AuthProvider);

  if (loader) {
    return (
      <progress className="progress absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-96 h-10"></progress>
    );
  }

  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  setLoader(false);

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ height: "110vh" }}
    >
      <form className="flex flex-col justify-center items-center  p-10 gap-3 rounded-lg relative shadow bg-blue-200 w-96 lg:w-2/4">
        <div className="avatar placeholder absolute lg:-top-20 md:-top-20 -top-10">
          <div className="bg-neutral-focus text-neutral-content rounded-full lg:w-32 md:w-32 w-20">
            <img src={userPlaceHolder} alt="" />
          </div>
        </div>
        <h1 className="text-2xl lg:text-5xl md:text-5xl font-bold uppercase my-4 text-white drop-shadow-md">
          Please Register
        </h1>
        <input
          type="text"
          placeholder="Full Name"
          className="input w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Photo URL"
          className="input w-full max-w-xs"
        />
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
          Register
        </button>
        <p className="text-blue-500 drop-shadow-md text-xl">
          Already Have An Account{" "}
          <Link className="link link-secondary" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
