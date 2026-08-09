import React, { useMemo, useState } from "react";
// Trong trường hợp nào thì component render;
// 1. State thay đổi
// 2. Props thay đổi
// 3. Context thay đổi
// 4. Parent render lại
// -------------------

// Lý do render lại Child:
// React render theo cây:
// 1. App
// 1.1. Child 1
// 1.2. Child 2

// ==> Xử lý bằng React.memo
// Giải thích:
// React.memo sẽ so sánh props. Nếu props cũ = props mới thì nó sẽ bỏ qua render

const Child = ({ onClick }) => {
  console.log("Child render");
  return (
    <div>
      <h1>Child component</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  // useCallback
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Count: {count}</h1>
      <Child onClick={handleClick} />
    </>
  );
}

export default App;
