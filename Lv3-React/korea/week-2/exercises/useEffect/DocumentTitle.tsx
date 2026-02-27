import React, { useState, useEffect } from "react";

/**
 * Goal: Run an effect when state changes.
    - Task: Build a counter. Whenever count changes, set document.title = "Count: X".
    - Constraints:
        - Title updates only when count changes (not on unrelated state).
        - Stretch: reset title to "React App" on unmount.
 */

export const DocumentTitle = () => {
  const [count, setCount] = useState<number>(0);
  
  useEffect(()=>{
    document.title = `Count: ${count}`
    return ()=>{ document.title = "React App"}
  }, [count])
  

  return <div>
    <button onClick={()=>setCount(count+1)}>Increase</button>
  </div>;
};
