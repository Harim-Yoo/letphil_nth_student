import { useState } from "react";

/**
 * Build a Counter component that increments by a step value passed in as a prop.
 * - Create a state variable
 * - Display the current count
 * - Create 3 buttons
 *      - button 1 increases count by 1
 *      - button 2 decreases count by 1
 *      - button 3 resets count to 0
 */

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return <div>
    <span>{count}</span>
    <button onClick={()=>setCount((prev : number) => prev+1)}>Increase</button>
    <button onClick={()=>setCount((prev :number) =>prev-1)}>Decrease</button>
    <button onClick={()=>setCount(0)}>Default</button>
  </div>;
};
