import React from "react";

const Question = ({ question }) => {
  const { img, name, answer } = question;
  return (
    <div>
      <div className="card lg:card-side h-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-full md:w-96 " src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-justify">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
