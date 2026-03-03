import {useState,useEffect} from "react";

export const useDebounce = (value:string,delay:number)=>{
    const [debouncedValue, setDebouncedValue] = useState<string|null>(null);
    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value)
        },delay)
        return () => clearTimeout(handler)
    },[value,delay])
    return debouncedValue
}
