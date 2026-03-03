import { useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";
/**
 * Goal: Fetch when dependency changes.
 * // https://pokeapi.co/api/v2/pokemon/${name}
    - Task: fetch from a public API on component render. Store the data in state, map over data and display users, style component
    - Constraints:
        - Show loading state.
        - Show error state.
 */

export const Api = () => {
  const { data, error, fetchData, name, setName, debouncedName } = useFetchData();

  useEffect(()=>{
    if (!debouncedName) return;
    fetchData(debouncedName)
  },[debouncedName])
  
  return <>
  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Search Up"/>
  {error ? <div>There is an error fetching data.</div> : <span>{data}</span>}
  </>
};
