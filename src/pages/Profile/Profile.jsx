import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import { AiFillRead, AiFillSetting } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdReport } from "react-icons/md";

const Profile = () => {
  const { user, loader } = useContext(AuthProvider);
  if (loader) {
    return (
      <progress className="progress absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-96 h-10"></progress>
    );
  }
  if (user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex lg:flex-row flex-col bg-slate-300 w-3/4 h-3/4 my-5 p-3 rounded-xl justify-between items-start">
          <div className="flex flex-col h-full w-full gap-2">
            <div className="flex gap-3">
              <div className="avatar online">
                <div className="w-24 rounded-full">
                  <img src={user?.photoURL} alt="" />
                </div>
              </div>
              <div>
                <h1 className="font-bold text-3xl">TSA Academy</h1>
                <h1 className="font">{user?.displayName}</h1>
              </div>
            </div>
            <div
              style={{ border: "3px dashed #fff" }}
              className="border rounded-lg flex  justify-center items-center h-96 w-full"
            >
              <h1 className="text-5xl font-bold text-white">No Discription</h1>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center mx-auto p-3 w-full h-full gap-2">
            <div className="w-full">
              <div className="flex flex-col">
                <Link
                  to="/"
                  className="btn btn-outline btn-success flex h-10 w-full justify-center items-center"
                >
                  Home
                </Link>
                <small>Click Here to visit home page</small>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start text-left w-full">
              <p>
                <small>Student</small>
              </p>
              <a
                href="https://github.com/tajwarsaiyeed"
                target="_blank"
                className="link link-primary flex items-center justify-center gap-1 font-semibold"
                rel="noreferrer"
              >
                <FaUser />
                Tajwar Saiyeed Abid
              </a>
              <Link
                to="/courses"
                className="link link-primary flex items-center justify-center gap-1 font-semibold"
              >
                <AiFillRead />
                Courses
              </Link>
              <Link
                to="/"
                className="link link-primary flex items-center justify-center gap-1 font-semibold"
              >
                <AiFillSetting />
                Settings
              </Link>
              <p className="text-justify my-1">
                TSA-Academy is a Educational Website. There are 6 courses about
                WEB Development. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Expedita, temporibus.tsa-academy-abid is
                provided by a third-party and is governed by separate terms of
                service, privacy policy, and support documentation
              </p>
              <a
                href="/"
                className="flex items-center text-lg text-red-500 my-5 link link-hover"
              >
                <MdReport /> Report A Problem
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Navigate to="/login"></Navigate>;
};

export default Profile;
