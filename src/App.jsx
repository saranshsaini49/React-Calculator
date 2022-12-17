import React, { useState, useEffect } from "react";

import Buttons from "./components/Buttons";
import Display from "./components/Display";
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
function App() {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      const name = e.key;
      console.log(name);
      if (name == "Enter") {
        handlerFunction("=");
      } else if (name == "Backspace") {
        handlerFunction("AC");
      } else if (data.includes(name)) {
        handlerFunction(name);
      }
    });
  }, []);

  const handlerFunction = (name) => {
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
    <div className="w-screen h-screen">
      <Display display={display} />
      <Buttons display={display} setDisplay={setDisplay} />
    </div>
  );
}

export default App;
