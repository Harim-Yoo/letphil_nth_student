import {useState, useEffect} from "react";

/**
 * Goal: Build a countdown timer that starts from 10.
 * Task:
 * - Create a 'seconds' state starting at 10.
 * - Use setInterval to decrease the value by 1 every second.
 * - Stop the timer when it reaches 0.
 * Constraints:
 * - Ensure the interval is cleared (clearInterval) when the component unmounts.
 * - Avoid "stale closures" by ensuring the effect correctly accesses the latest state or uses a functional update.
 */
export const CountdownTimer = () => {
  const [seconds, setSeconds] = useState<number>(10);
  useEffect(()=>{
    if (seconds === 0) {
      alert("Time Out");
      return;
    }
    const interval = setInterval(()=>setSeconds(prev=>prev-1),1000);
    return ()=>{clearInterval(interval)}
  }, [seconds])
  return <>Time left: {seconds}</>;
};