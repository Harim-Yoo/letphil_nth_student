import { useState, useEffect } from "react";

export const useFetchData = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [name, setName] = useState<string>("pikachu")
    
    const fetchData = async () => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {method: "GET"})
            const data = await res.json();
            setData(data[0]);
        } catch(error:any) {
            setError(error.message);
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
    
    return { loading, data, error, fetchData, name, setName };
}