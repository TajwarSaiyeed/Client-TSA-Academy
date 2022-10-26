import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="relative">
      <div className="bgImage"></div>
      <div className=" absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 gap-2 flex">
        <Link to="/" className="btn btn-primary">
          Back To Home
        </Link>
        <Link to="/courses" className="btn btn-success">
          Back To Cources
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
