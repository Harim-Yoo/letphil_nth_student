import { useState } from 'react'
import { CirclePlus, CircleMinus } from 'lucide-react';
import React from 'react';

export const CounterApp = ( props: {
  targetRef : React.RefObject<HTMLDivElement|null>
}) => {
  const [count, setCount] = useState<number>(0);

  return(
    <div ref = {props.targetRef} className="flex flex-col justify-start py-20 items-center w-auto h-100 gap-5">
        <h2 className="text-2xl font-bold text-white px-5 py-2 bg-amber-900 rounded-xl hover:scale-105 duration-150 w-75 text-center">UseState</h2>
        <p>This section shows how to use <span className="bg-slate-500 px-3 py-1 rounded-xl hover:scale-120 duration-150 cursor-pointer">UseState</span> method in React.</p>
        <span className="font-bold text-5xl hover:scale-105 hover:text-amber-900 duration-200">{count}</span>
        <div className="flex flex-row justify-center items-center gap-5">
            <CirclePlus onClick={()=>setCount(count=>count+1)} className="w-10 h-10 hover:scale-105 duration-200"/>
            <CircleMinus onClick={()=>setCount(count=>count-1)} className="w-10 h-10 hover:scale-105 duration-200"/>
        </div>
      </div>
  )
}