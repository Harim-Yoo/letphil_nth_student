import{ useState, useEffect } from "react";


export const Example = () => {
  /**
     * Common use cases:
        - Fetching data from an API
        - Subscribing/unsubscribing to events (resize, keydown, websockets)
        - Timers/intervals
        - Reading/writing localStorage
   */

  // 1. empty dependency array []
  // 2. some value in dependency array [name]
  // 3. no dependency runs on every render

  const [windowSize, setWindowSize] = useState<any>({
    width:window.innerWidth,
    height: window.innerHeight
  })

  useEffect(()=>{
    
    const handler = () => {
      setWindowSize({
    width:window.innerWidth,
    height: window.innerHeight
    })}

    window.addEventListener("resize",handler)
    return () => {window.removeEventListener("resize",handler)}
  });

  return (
    <div>{windowSize.width}</div>
  );
};

