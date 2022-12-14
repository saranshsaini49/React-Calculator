import React from "react";

const data = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
const Button = ({ item, display, setDisplay }) => {
  const handleKey = (e) => {
    const name = e.key;
    if (name === "Enter") {
      setDisplay(eval(display));
    }
    if (data.includes(name)) {
      if (display === "" && name == ".") {
        setDisplay("0.");
      } else if (display !== "" && name == ".") {
        const op = display.charAt(display.length - 1);
        if (!(op >= "0" && op <= "9")) {
          setDisplay(display + "0.");
        } else {
          setDisplay(display + ".");
        }
      }
      if (display === "" && !(name >= "0" && name <= "9")) {
      } else {
        if (name != "AC" && name != "=" && name !== "+/-" && name != ".") {
          const op = display.charAt(display.length - 1);
          if (op == ".") setDisplay(display + "0" + name);
          else setDisplay(display + name);
        } else if (name == "=") {
          setDisplay(eval(display));
        } else if (name == "AC") {
          setDisplay("");
        } else if (name == "+/-") {
          setDisplay(eval("-1*" + display));
        }
      }
    }
  };
  const handleClick = (e) => {
    const name = e.target.name;
    if (display === "" && name == ".") {
      setDisplay("0.");
    } else if (display !== "" && name == ".") {
      const op = display.charAt(display.length - 1);
      if (!(op >= "0" && op <= "9")) {
        setDisplay(display + "0.");
      } else {
        setDisplay(display + ".");
      }
    }
    if (display === "" && !(name >= "0" && name <= "9")) {
    } else {
      if (name != "AC" && name != "=" && name !== "+/-" && name != ".") {
        const op = display.charAt(display.length - 1);
        if (op == ".") setDisplay(display + "0" + name);
        else setDisplay(display + name);
      } else if (name == "=") {
        setDisplay(eval(display));
      } else if (name == "AC") {
        setDisplay("");
      } else if (name == "+/-") {
        setDisplay(eval("-1*" + display));
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
        onKeyPress={(e) => handleKey(e)}
      >
        {item[0]}
      </button>

      <button
        name={item[1]}
        className="border border-gray-600 "
        onClick={(e) => handleClick(e)}
        onKeyPress={(e) => handleKey(e)}
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
        onKeyPress={(e) => handleKey(e)}
      >
        {item[2]}
      </button>
      {item.length == 4 && (
        <button
          name={item[3]}
          className="border border-gray-600 bg-orange-400 text-white"
          onClick={(e) => handleClick(e)}
          onKeyPress={(e) => handleKey(e)}
        >
          {item[3]}
        </button>
      )}
    </div>
  );
};

export default Button;
