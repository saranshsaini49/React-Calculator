import React from "react";

const Display = ({ display }) => {
  return (
    <div className="w-full h-1/6 flex justify-end items-center bg-[#808080] text-white ">
      <div
        className={`outline-none text-xl md:text-8xl p-4 ${
          display == "" ? " text-gray-400" : ""
        }`}
      >
        {display == "" ? "0" : display}
      </div>
    </div>
  );
};

export default Display;
