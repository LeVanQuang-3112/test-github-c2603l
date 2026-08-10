import React, { useState } from "react";
const Child = ({ onClick }) => {
  return (
    <div>
      <h1>Child component</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// useCallback
// React query

function App() {
  const [count, setCount] = useState(0);

  // useCallback
  const handleClickTest = () => {
    console.log("Clicked");
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Count: {count}</h1>
      <Child onClick={handleClickTest} />
    </>
  );
}

export default App;
