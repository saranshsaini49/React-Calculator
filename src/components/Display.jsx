import React from "react";

const Display = ({ display }) => {
  return (
    <div className="w-full h-1/6 flex justify-end items-center ">
      <div className="outline-none text-xl md:text-5xl p-4">
        {display == "" ? "0" : display}
      </div>
    </div>
  );
};

export default Display;
