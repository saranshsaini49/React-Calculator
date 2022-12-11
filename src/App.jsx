import { useState } from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const [display, setDisplay] = useState("0");
  return (
    <div className="w-screen h-screen">
      <Display prevData={prevData} display={display} />
      <Buttons
        prevData={prevData}
        setPrevData={setPrevData}
        display={display}
        setDisplay={setDisplay}
      />
    </div>
  );
}

export default App;
