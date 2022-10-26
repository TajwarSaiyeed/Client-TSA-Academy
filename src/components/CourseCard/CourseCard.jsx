import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { _id, name, img, desc } = course;
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <img className="" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase font-bold">{name}</h2>
        <p className="text-justify">
          {desc.length > 100 ? (
            <>
              {desc.slice(0, 150) + "..."}
              <Link to={`/course/${_id}`} className="link link-primary">
                more
              </Link>
            </>
          ) : (
            desc
          )}
        </p>
        <div className="card-actions justify-end">
          <Link to="/checkout">
            <button className="btn btn-primary">Get Premium Access</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
