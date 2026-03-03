import { useEffect, useState } from "react";

/**
 * Goal: Simulate fetching different data when a category changes.
 * Task:
 * - Create a 'category' state (e.g., "news" or "sports").
 * - Provide buttons to switch between these categories.
 * - Whenever the category changes, console.log(`Fetching data for: ${category}`).
 * Constraints:
 * - The effect should NOT run if unrelated state (like a counter) changes.
 * - Use the dependency array correctly to target only the 'category' state.
 */
export const DataFetcher = () => {
  const [category, setCategory] = useState<string>("")
  const [counter, setCounter] = useState<number>(0);
  useEffect(()=>{
    console.log(`Fetching data for ${category}`);
  },[category])
  return <>
  <button onClick={()=>setCounter(counter+1)}>Count : {counter}</button>
  <button onClick={()=>setCategory("news")}>Change to News</button>
  <button onClick={()=>setCategory("sports")}>Change to Sports</button>
  </>;
};