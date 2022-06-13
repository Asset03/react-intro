import { React, useState } from 'react';
import Dalida  from './dalida';
import HW from './hw';

export default function App() {
  const [counter,setCounter] = useState(0);

  const increase = ()=>{
    setCounter(count => count+1);
  }
  
  const decrease = ()=>{
    setCounter(count => count-1);
  }

  const reset = ()=>{
    setCounter(count => count = 0);
  }  

  return (
    <div className='counter'>
      {/* <h1>Counter</h1>
      <Dalida/>
      <span>{counter}</span>
      <div className='res'>
        <div className='btn'>

          <button onClick={increase} className='increase'>+</button>
          <button onClick={decrease} className='decrease'>-</button>
          <button onClick={reset} className='reset'>Reset</button>

        </div>
      </div> */}
      <HW/>
    </div>

  );
};