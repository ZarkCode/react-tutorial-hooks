import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
  }, [count]);
  return <div className="app">I've rendered {count} times</div>;
};

export default App;
