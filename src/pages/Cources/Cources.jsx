import React from "react";
import CourceCard from "../../components/CourceCard/CourceCard";

const Cources = () => {
  const cources = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <h1>Cources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {cources.map((c) => (
          <CourceCard key={c} />
        ))}
      </div>
    </>
  );
};

export default Cources;
