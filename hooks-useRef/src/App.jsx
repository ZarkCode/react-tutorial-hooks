import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [value, setvalue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const inputElem = useRef();

  const btnClicked = () => {
    inputElem.current.style.background = "lightgreen";
  };

  return (
    <div className="container">
      <button onClick={() => setvalue((val) => val - 1)}>-1</button>
      <h1>{value}</h1>
      <h2>Rendered {count.current} times</h2>
      <button onClick={() => setvalue((val) => val + 1)}>+1</button>
      <br />
      <input type="text" ref={inputElem} />
      <br />
      <button onClick={btnClicked}>Click me</button>
    </div>
  );
};

export default App;