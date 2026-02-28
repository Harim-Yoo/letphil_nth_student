import { useState, useEffect } from "react"

export const useDebounce = (value:string, delay:time) => {
    const [debouncedValue, setDebaouncedValue] = useState<string>("")
    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebaouncedValue(value);
        },delay)
        return () => {clearTimeout(handler)}
    },[value,delay])

    return debouncedValue
}