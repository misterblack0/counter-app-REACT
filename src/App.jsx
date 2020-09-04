import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div className="container">
      <h1 id="counter">{count}</h1>

      <button className="btn" onClick={decrease}>
        -
      </button>

      <button className="btn" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default App;
