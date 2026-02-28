import {useState, useEffect} from "react";
/**
 * Goal: Track and display the current window width.
 * Task:
 * - Create a 'width' state initialized with window.innerWidth.
 * - Add a 'resize' event listener to the window object that updates the state.
 * - Render the current width inside the component.
 * Constraints:
 * - The event listener must be added only once when the component mounts.
 * - You MUST remove the event listener (cleanup) when the component unmounts to prevent memory leaks.
 */
type Data = {
  width:number;
  height:number;
}
export const WindowWidthTracker = () => {
  const [windowSize, setWindowSize] = useState<Data>({width:window.innerWidth,height:window.innerHeight})
  useEffect(()=>{
    const handler = () => {
      setWindowSize({width:window.innerWidth,height:window.innerHeight})
    }
    window.addEventListener("resize",handler);
    return () => {window.removeEventListener("resize",handler)}
  })
  return <>{windowSize.width} X {windowSize.height}</>;
};