import { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { useDebounce } from "../hooks/useDebounce";

// https://randomuser.me/api/?results=10

/**
 * Goal: Fetch when dependency changes.
    - Task: fetch from a public API on component render. Store the data in state, map over data and display users, style component
    - Constraints:
        - Show loading state.
        - Show error state.
 */

export const Api = () => {
  const {loading, error, data, fetchData, name, setName} = useFetchData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Loading Error...</div>;
  if (!data) return <div>No Data</div>;

  return <>
  </>
  ;
};
