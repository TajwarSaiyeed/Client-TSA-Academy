import React, { createRef, useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import { AuthProvider } from "../../contexts/AuthContext";

const ref = createRef();

const CourseCardDetails = () => {
  const { user } = useContext(AuthProvider);

  const courseDetails = useLoaderData();
  const { name, desc, img } = courseDetails;
  return (
    <div className="flex justify-center items-center flex-col rounded-lg min-h-screen gap-5">
      <div
        className="hero min-h-2/4 h-96 w-2/4 bg-base-200 rounded-lg"
        ref={ref}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{desc}</p>
            <div className="gap-2 flex">
              <button className="btn btn-primary">Get Started</button>

              <Pdf targetRef={ref} filename={`${name}.pdf`}>
                {({ toPdf }) => (
                  <button
                    className="btn btn-outline btn-active"
                    onClick={toPdf}
                  >
                    Download Pdf
                  </button>
                )}
              </Pdf>
            </div>
          </div>
        </div>
      </div>
      {user}
      <Link to="/courses">
        <button className="btn btn-primary">Back to Courses</button>
      </Link>
    </div>
  );
};

export default CourseCardDetails;
