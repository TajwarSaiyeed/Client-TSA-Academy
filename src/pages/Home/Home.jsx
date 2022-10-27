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
        <div className="flex flex-col lg:flex-row md:flex-row items-center justify-between lg:px-14 sm:mx-12">
          <div className="lg:w-2/4 w-full flex flex-col items-center justify-center sm:items-center md:items-start">
            <h1 className="text-3xl lg:text-7xl md:text-6xl sm:text-4xl font-bold text-white drop-shadow-lg flex my-5">
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
          <div className="lg:w-2/4 w-full flex justify-center items-center">
            <div className="rounded-full overflow-hidden w-52 h-52 mt-10 lg:mt-0 lg:max-w-96 lg:max-h-96 md:w-80 md:h-80">
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
