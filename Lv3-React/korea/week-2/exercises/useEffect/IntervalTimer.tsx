import {useState, useEffect} from "react";

// setInterval, clearInterval

/**
 * Goal: Intervals + cleanup + stale closure avoidance.
    - Task: Start/Stop stopwatch that increments every second.
    - Constraints:
        - No double-interval bug when clicking start multiple times.
        - Uses cleanup so interval stops.
 */

export const IntervalTimer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  
  useEffect(()=>{
    if (!isActive) return;
    const interval = setInterval(()=>{setSeconds(prev=>prev+1)},1000)
    return ()=>{clearInterval(interval)}
  },[isActive])
  
  return <>
  <span className="flex flex-col justify-center items-center">{seconds}</span>
  <button onClick={()=>setIsActive(!isActive)}>
    {isActive ? "Stop" : "Start"}
  </button>
  </>;
}
