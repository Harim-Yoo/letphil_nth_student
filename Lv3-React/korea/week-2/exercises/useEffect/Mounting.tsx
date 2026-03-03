import React, { useEffect } from "react";

/**
 * Goal: Run an effect once on mount.
   Task: When the component first renders, console.log("Mounted!").
   Constraints:
    - Must not log again on re-renders.
    - Stretch: also log "Unmounted!" on cleanup.
 */

/**
 * 1. It should inside a component
 * 2. You can't conditionally call a hook
 */

export const Mounting = () => {
  useEffect(()=>{
    console.log("Mounted");
    return ()=>{console.log("Unmounted")}
  },[])
  return <div>Rendering...</div>;
};
