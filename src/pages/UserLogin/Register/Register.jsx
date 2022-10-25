import React from "react";
import userPlaceHolder from "../../../assets/userPlaceHolder.png";

const Register = () => {
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
      </form>
    </div>
  );
};

export default Register;
