import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = createRef();

const CourseCardDetails = () => {
  const courseDetails = useLoaderData();
  const { _id, name, desc, img } = courseDetails;
  return (
    <div className="flex justify-center items-center flex-col min-h-screen gap-5 py-2 dark:bg-gray-400">
      <div
        className="hero h-2/4 w-96 lg:w-3/4 lg:h-96 dark:bg-slate-500 dark:text-white dark:shadow-slate-200 dark:shadow-md bg-base-200 rounded-lg"
        ref={ref}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img}
            className="max-w-sm shadow-2xl bg-white dark:shadow-slate-100 p-3 rounded-xl"
            alt=""
          />
          <div className="text-center lg:text-left">
            <h1 className="text-5xl uppercase font-bold">{name}</h1>
            <p className="py-6 text-justify">{desc}</p>
            <div className="gap-2 flex">
              <Link to={`/checkout/${_id}`}>
                <button className="btn btn-primary dark:btn-accent dark:shadow-teal-500 dark:shadow-md">
                  Get Premium Access
                </button>
              </Link>

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
      <Link to="/courses">
        <button className="btn btn-primary dark:btn-success">
          Back to Courses
        </button>
      </Link>
    </div>
  );
};

export default CourseCardDetails;
