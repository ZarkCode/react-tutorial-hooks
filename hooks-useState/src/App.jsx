import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("Red");

  const changeColor = () => {
    setColor("Blue");
  };

  const [car, setcar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color: "red",
  });

  const changeCarColor = () => {
    setcar((prev) => ({ ...prev, color: "blue" }));
  };

  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <>
      {/* Single Variable useState */}
      <div>
        <h1>My Favourite Color {color}!</h1>
        <button onClick={changeColor}>Blue</button>
      </div>

      {/* Single object useState */}
      <div>
        <h1>My {car.brand}</h1>
        <h2>
          It is a {car.color} {car.model} from {car.year}
        </h2>
        <button onClick={changeCarColor}>Car Blue</button>
      </div>

      {/* update based on previous state */}
      <div>
        <h1>Count: {count}</h1>
        <button onClick={changeCount}>Increase by 4</button>
      </div>
    </>
  );
};

export default App;
