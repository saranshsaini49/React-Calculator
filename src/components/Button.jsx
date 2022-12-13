import React from "react";

const Button = ({ item, display, setDisplay }) => {
  const handleClick = (e) => {
    const name = e.target.name;
    if (display === "" && name == ".") {
      setDisplay("0.");
    }
    if (display === "" && !(name >= "0" && name <= "9")) {
    } else {
      if (name != "AC" && name != "=" && name !== "+/-" && name != ".") {
        setDisplay(display + name);
      } else if (name == "=") {
        setDisplay(eval(display));
      } else if (name == "AC") {
        setDisplay("");
      } else if (name == "+/-") {
        setDisplay(eval("-1*" + display));
      } else if (name == ".") {
      }
    }
  };
  return (
    <div className="w-screen grid grid-cols-4 ">
      <button
        name={item[0]}
        className={
          item.length == 3
            ? "grid col-span-2 border border-gray-600 items-center"
            : "border border-gray-600 "
        }
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
        className={
          item.length == 4
            ? `border border-gray-600`
            : `border border-gray-600 bg-orange-400 text-white`
        }
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
