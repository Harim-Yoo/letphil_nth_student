import {useState, useEffect} from "react";
/**
 * Goal: Sync state with external storage.
    - Task: A text input “username”. Load initial value from localStorage on mount, and save to localStorage whenever it changes.
    - Constraints:
        - Don’t overwrite storage with empty before loading.
        - Handle missing storage value.
 */

export const LocalStorage = () => {
  const [userName, setUserName] = useState<string>(()=>{
    const fetchedData = localStorage.getItem("name");
    return (fetchedData ? fetchedData : "")
  })

  useEffect(()=>{
    localStorage.setItem("name",userName)
  },[userName]);

  return <div>
    <input value={userName} onChange={(e)=>setUserName(e.target.value)}/>
  </div>;
};
