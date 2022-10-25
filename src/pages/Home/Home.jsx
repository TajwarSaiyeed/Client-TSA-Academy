/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import "./Home.css";
import rightside from "../../assets/rightside.jpeg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="relative">
      <div className="my-class min-h-screen"></div>
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full">
        <div className="flex items-center justify-between px-16">
          <div className="w-2/4">
            <h1 className="text-8xl font-bold text-white drop-shadow-lg flex my-5">
              <span>TSA</span>
              <marquee loop="n" behavior="scroll" direction="up">
                <span className="text-cyan-500 drop-shadow-lg">Academy</span>
              </marquee>
            </h1>
            <div className="flex gap-5">
              <Link to="/courses">
                <button className="btn btn-outline btn-info">Courses</button>
              </Link>
              <Link to="/blog">
                <button className="btn btn-outline btn-warning">Blog</button>
              </Link>
            </div>
          </div>
          <div className="w-2/4">
            <div className="rounded-full bg-red-600 overflow-hidden mx-auto w-96 h-96">
              <img
                className="w-full h-full rounded-full"
                src={rightside}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
