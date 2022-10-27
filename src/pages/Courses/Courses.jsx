import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../../components/CourseCard/CourseCard";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div
      className="flex flex-col lg:grid"
      style={{ gridTemplateColumns: "1fr 3fr" }}
    >
      <div>
        <ul className="menu p-4 overflow-y-auto lg:w-80 w-full bg-base-100 text-base-content">
          {courses.map((course) => (
            <li key={course._id}>
              <Link to={`/course/${course._id}`}>{course.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-3 gap-3">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
