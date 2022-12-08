import React from "react";

const Button = ({ item }) => {
  return (
    <div className="w-screen grid grid-cols-4 ">
      <button
        name="AC"
        className={
          item.length == 3
            ? "grid col-span-2 border border-gray-600  items-center"
            : "border border-gray-600 "
        }
      >
        {item[0]}
      </button>

      <button name="+/-" className="border border-gray-600 ">
        {item[1]}
      </button>
      <button
        name="%"
        className={
          item.length == 4
            ? `border border-gray-600`
            : `border border-gray-600 bg-orange-400 text-white`
        }
      >
        {item[2]}
      </button>
      {item.length == 4 && (
        <button
          name="/"
          className="border border-gray-600 bg-orange-400 text-white"
        >
          {item[3]}
        </button>
      )}
    </div>
  );
};

export default Button;
