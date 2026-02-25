import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const [value, setvalue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  })

  return (
    <>
      <button onClick={() => setvalue((val) => val - 1)}>-1</button>
      <h1>{value}</h1>
      <h2>Rendered {count.current} times</h2>
      <button onClick={() => setvalue((val) => val + 1)}>+1</button>
    </>
  );
};

export default App;
