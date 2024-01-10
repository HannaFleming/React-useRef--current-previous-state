**useEffect and useRef**
***

`useRef()` might be a better and more efficient way to manage state.
A common use case is handling a form `input` field when the submit button is clicked. For example, lets look at the following code snippet:
***

```
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

```
![1](https://github.com/HannaFleming/useRef--current-previous-state/assets/124400864/1c2a70e9-8dd8-494d-8766-766207b775c3)


![2](https://github.com/HannaFleming/useRef--current-previous-state/assets/124400864/7104567a-18d4-4212-a895-69db35eb7b06)
