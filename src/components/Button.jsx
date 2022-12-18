import React from "react";

const Button = ({ item, handlerFunction }) => {
  const handleClick = (e) => {
    const name = e.target.name;
    handlerFunction(name);
  };

  return (
    <div className="w-screen grid grid-cols-4 ">
      <button
        name={item[0]}
        className={`border border-gray-600
          ${item.length == 3 ? "grid col-span-2  items-center" : ""}`}
        onClick={(e) => handleClick(e)}
      >
        {item[0]}
      </button>

      <button
        name={item[1]}
        className="border border-gray-600 "
        onClick={(e) => handleClick(e)}
      >
        {item[1]}
      </button>
      <button
        name={item[2]}
        className={`border border-gray-600 ${
          item.length == 4
            ? ``
            : `border border-gray-600 bg-orange-400 text-white`
        }`}
        onClick={(e) => handleClick(e)}
      >
        {item[2]}
      </button>
      {item.length == 4 && (
        <button
          name={item[3]}
          className="border border-gray-600 bg-orange-400 text-white"
          onClick={(e) => handleClick(e)}
        >
          {item[3]}
        </button>
      )}
    </div>
  );
};

export default Button;
