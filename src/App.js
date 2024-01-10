import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const previousCountRef = useRef(0);
  const previousCount = previousCountRef.current;
 
useEffect (()=>{
  previousCountRef.current = count;
})

  return (
    <div className="App">
    <p>Current state:{count}</p>
    <p>Previous state:{previousCount}</p>
    <button onClick={() => setCount (count + 1)}>Click here</button>
    </div>
  );
 }

export default App;
