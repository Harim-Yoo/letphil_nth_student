import {useEffect, useState} from 'react';

type Data = {
    width: number;
    height: number;
}
export const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState<Data>({
        width:window.innerWidth,
        height:window.innerHeight,
    })

    useEffect(()=>{
        const handler = ()=>{
            setWindowSize({width:window.innerWidth,height:window.innerHeight})
        }
        window.addEventListener("resize", handler);
        return () => {window.removeEventListener("resize",handler)}
    },[])
    return windowSize
}