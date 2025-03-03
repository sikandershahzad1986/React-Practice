import { useState } from "react";

function App() {

  let [count,setCount] = useState(0);

  function add(){
    return setCount(count+1);
  }

  function remove(){
    return setCount(count-1);
  }

  return (
    <>
    <h1>Counter Project</h1>
   <h2>Counter: {count}</h2>
   <button onClick={add}>+</button>
   <button onClick={remove}>-</button>
    </>
  )
}

export default App;
