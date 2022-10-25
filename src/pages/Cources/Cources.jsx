import React from "react";
import { useLoaderData } from "react-router-dom";
import CourceCard from "../../components/CourceCard/CourceCard";

const Cources = () => {
  const courses = useLoaderData();
  return (
    <div className="grid" style={{ gridTemplateColumns: "1fr 3fr" }}>
      <div>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {courses.map((course) => (
            <li key={course.id}>
              <a href="/">{course.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-3 p-3 gap-3">
        {courses.map((course) => (
          <CourceCard key={courses.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Cources;
