import React, { useState } from "react";

/**
 * Build a Counter component that increments by a step value passed in as a prop.
 * - Create a state variable
 * - Display the current count
 * - Create 3 buttons
 *      - button 1 increases count by 1
 *      - button 2 decreases count by 1
 *      - button 3 resets count to 0
 */

type Info = {
  text:string;
  function: ()=>void;
}
export const Counter = (props: {
  step: number
}
) => {
  const {step} = props;
  const [count, setCount] = useState<number>(0)
  const countIncrease = () => {
    setCount(count => count+step)
  }
  const countDecrease = () => {
    setCount(count=> count-step)
  }
  const countDefault = () => {
    setCount(0)
  }
  const ButtonsInfo: Info[]= [
    {
      text: "Button 1",
      function: countIncrease
    },
    {
      text: "Button 2",
      function: countDecrease
    },
    {
      text: "Button 3",
      function: countDefault
    }
  ]
  return(

      <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
        <h2 className="text-5xl px-4 py-2 font-bold rounded-xl bg-slate-900 text-white">Counter</h2>
        <span className="text-5xl font-bold hover:scale-110 duration-150">{count}</span>
        <div className="flex flex-row gap-5 justify-center items-center w-full">
          {ButtonsInfo.map((item,index)=>(
            <div key={index}>
            <button onClick={item.function} className="px-3 py-1 bg-slate-200 rounded-lg hover:scale-105 duration-150">{item.text}</button>
            </div>
          ))}
        </div>
      </div>

  )
};
