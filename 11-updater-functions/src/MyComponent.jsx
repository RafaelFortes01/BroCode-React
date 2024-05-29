import { useState } from "react"

function MyComponent() {
  
  const [count, setCount] = useState(0)
  
  function increment() {
     setCount(prevCount => prevCount + 1)
     setCount(prevCount => prevCount + 1)
     setCount(prevCount => prevCount + 1)
  }

   function decrement() {
     setCount(prevCount => prevCount - 1)
     setCount(prevCount => prevCount - 1)
     setCount(prevCount => prevCount - 1)
   }

   function reset() {
      setCount(0)
   }

   return(
      <div>
         <p>Count: {count}</p>
         <button onClick={increment}>Increment</button>
         <button onClick={reset}>Reset</button>
         <button onClick={decrement}>Decrement</button>
      </div>
   )
}

export default MyComponent