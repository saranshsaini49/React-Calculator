import React from "react";
import Button from "./Button";

const buttonsData = [
  ["AC", "+", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];
const Buttons = () => {
  return (
    <div className="grid grid-row-5 h-5/6 text-xl md:text-6xl bg-platium ">
      {buttonsData.map((item, id) => {
        return <Button item={item} key={id} />;
      })}
    </div>
  );
};

export default Buttons;
