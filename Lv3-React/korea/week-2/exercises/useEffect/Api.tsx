import { useEffect, useState } from "react";

// https://randomuser.me/api/?results=10

/**
 * Goal: Fetch when dependency changes.
    - Task: fetch from a public API on component render. Store the data in state, map over data and display users, style component
    - Constraints:
        - Show loading state.
        - Show error state.
 */

export const Api = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/?id=1", {method: "GET"})
        const data = await res.json();
        setData(data[0]);
      } catch(e:any) {
        setError(e.message);
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  },[])
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Loading Error...</div>;
  if (!data) return <div>No Data</div>;
  const {id,name,username} = data;
  return <>
  {loading && <div>Loading...</div>}
  {!loading && (
    <>
    <div>Show Data</div>
    <span>Id: {id}</span>
    <span>UserName: {username}</span>
    <span>Name: {name}</span>
    </>
  )}
  </>
  ;
};
