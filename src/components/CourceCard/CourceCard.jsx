import React from "react";
import { Link } from "react-router-dom";

const CourceCard = ({ course }) => {
  const { id, name, img, desc } = course;
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <img className="" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {desc.length > 100 ? (
            <>
              {desc.slice(0, 150) + "..."}
              <Link to={`/course/${id}`}>more</Link>
            </>
          ) : (
            desc
          )}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourceCard;
