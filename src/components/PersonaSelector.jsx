import React from "react";

const PersonaSelector = ({ selected, setSelected }) => {
  const buttonClasses = (persona) =>
    `px-6 py-4 rounded-full font-semibold transition-all duration-300 text-sm shadow-sm ${
      selected === persona
        ? persona === "hitesh"
          ? "bg-orange-800 text-white shadow-md"
          : persona === "piyush"
          ? "bg-pink-800 text-white shadow-md"
          : "bg-purple-800 text-white shadow-md"
        : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 hover:shadow-md"
    }`;

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <button
        onClick={() => setSelected("hitesh")}
        className={buttonClasses("hitesh")}
      >
        Hitesh Sir
      </button>
      <button
        onClick={() => setSelected("piyush")}
        className={buttonClasses("piyush")}
      >
        Piyush Sir
      </button>
      <button
        onClick={() => setSelected("both")}
        className={buttonClasses("both")}
      >
        Both
      </button>
    </div>
  );
};

export default PersonaSelector;
