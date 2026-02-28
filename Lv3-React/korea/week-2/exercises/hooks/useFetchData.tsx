import { useState, useEffect } from "react";
import {useDebounce} from '../hooks/useDebounce';

export const useFetchData = () => {
    const [data, setData] = useState<any>(null);
    const [name, setName] = useState<string>("pikachu");
    const [error, setError] = useState<string|null>(null);
    const debouncedName = useDebounce(name,500);

    const fetchData = async (name:string) => {
    if (!name) return;
    setError(null);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      if (!response.ok) throw new Error("No data")
      const data = await response.json();
      setData(data.name);
    } catch(error:any) {
      setError(error.message)
      setData(null);
    }
  }
    return { data, error, fetchData, name, setName, setError, debouncedName };
}