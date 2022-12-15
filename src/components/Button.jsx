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
  };

  const handleClick = (e) => {
    const name = e.target.name;
    if (name == "AC") {
      setDisplay("");
    }
    if (display != "") {
      const lastChar = display.charAt(display.length - 1);

      if (name >= "0" && name <= "9") {
        setDisplay(display + name);
      } else if (name == "=") {
        setDisplay(eval(display) + "");
      } else if (
        name == "+" ||
        name == "-" ||
        name == "/" ||
        name == "*" ||
        name == "%"
      ) {
        if (
          lastChar == "+" ||
          lastChar == "-" ||
          lastChar == "/" ||
          lastChar == "*" ||
          lastChar == "%"
        ) {
        } else if (lastChar == ".") {
          setDisplay(display + "0" + name);
        } else {
          setDisplay(display + name);
        }
      } else if (name == "+/-") {
        setDisplay(eval("-1*" + display) + "");
      } else if (name == ".") {
        if (lastChar >= "0" && lastChar <= "9") {
          if (!isDecimal()) {
            setDisplay(display + ".");
          }
        } else {
          setDisplay(display + "0.");
        }
      }
    } else {
      if (name >= "0" && name <= "9") {
        setDisplay(name);
      } else if (name == ".") {
        setDisplay("0.");
      }
    }
  };
  const isDecimal = () => {
    let i = display.length - 1;

    while (i >= 0) {
      if (
        display.charAt(i) == "+" ||
        display.charAt(i) == "-" ||
        display.charAt(i) == "/" ||
        display.charAt(i) == "*" ||
        display.charAt(i) == "%"
      ) {
        return false;
      }
      if (display.charAt(i) == ".") {
        return true;
      }
      i--;
    }
    return false;
  };
  return (
    <div className="w-screen grid grid-cols-4 ">
      <button
        name={item[0]}
        className={`border border-gray-600
          ${item.length == 3 ? "grid col-span-2  items-center" : ""}`}
        onClick={(e) => handleClick(e)}
        onKeyDown={(e) => handleKey(e)}
      >
        {item[0]}
      </button>

      <button
        name={item[1]}
        className="border border-gray-600 "
        onClick={(e) => handleClick(e)}
        onKeyDown={(e) => handleKey(e)}
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
        onKeyDown={(e) => handleKey(e)}
      >
        {item[2]}
      </button>
      {item.length == 4 && (
        <button
          name={item[3]}
          className="border border-gray-600 bg-orange-400 text-white"
          onClick={(e) => handleClick(e)}
          onKeyDown={(e) => handleKey(e)}
        >
          {item[3]}
        </button>
      )}
    </div>
  );
};

export default Button;
