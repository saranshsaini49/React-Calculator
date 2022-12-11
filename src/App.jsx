import { useState } from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const [display, setDisplay] = useState("");
  return (
    <div className="w-screen h-screen">
      <Display display={display} />
      <Buttons display={display} setDisplay={setDisplay} />
    </div>
  );
}

export default App;
