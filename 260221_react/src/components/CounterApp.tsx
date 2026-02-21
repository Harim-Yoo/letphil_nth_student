import { useState } from 'react'

export const CounterApp = () => {
  const [count, setCount] = useState<number>(0);

  return(
    <div className="bg-white color-black p-10 flex justify-around items-center">
        <span>Here is the count: {count}</span>
        <div className="flex flex-col">
          <button onClick={()=>setCount(count=>count+1)}>
            +
          </button>
          <button onClick={()=>setCount(count=>count-1)}>
            -
          </button>
        </div>
      </div>
  )
}