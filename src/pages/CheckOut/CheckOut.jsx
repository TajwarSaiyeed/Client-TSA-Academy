import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthProvider } from "../../contexts/AuthContext";

const CheckOut = () => {
  const { user } = useContext(AuthProvider);
  const courseCheckOut = useLoaderData();
  const { name, desc, img, price } = courseCheckOut;
  const enrollSuccess = () => {
    toast.success(`Enroll SuccessFull for ${name} Course`);
  };
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
      <div className="card card-side w-3/4 bg-base-100 shadow-xl m-5">
        <figure>
          <img className="w-80 p-4" src={img} alt="course" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-justify">{desc}</p>
          <div className="card-actions justify-end">
            <Link to="/courses">
              <button className="btn btn-primary">Back to Courses</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white w-3/4 my-2 shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            CheckOut Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {user?.displayName}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                CheckOut for
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {name + " course"}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {user?.email}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Phone Number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="phone"
                  id=""
                  className="input w-full max-w-xs"
                />
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Price</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {"$" + price}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm  text-justify text-gray-900 sm:col-span-2 sm:mt-0">
                {desc}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <button
                className="btn btn-outline btn-success"
                onClick={enrollSuccess}
              >
                Enroll Now
              </button>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
