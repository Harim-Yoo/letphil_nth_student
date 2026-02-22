import { useState } from "react"
export const ToggleOnOff = (props:{
  targetRef: React.RefObject<HTMLDivElement|null>
}) => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <div ref={props.targetRef} className="flex flex-col justify-start py-20 items-center w-auto h-100 gap-5">
      <h2 className="text-2xl font-bold text-white px-5 py-2 bg-amber-900 rounded-xl hover:scale-105 duration-150 w-75 text-center">Toggle</h2>
      <p>Click the following button for <span className="px-4 py-1 rounded-xl bg-amber-200 hover:scale-110 duration-150">Toggle</span> functionality.</p>
      <button onClick={()=>setToggle(!toggle)} className="px-5 py-3 bg-black rounded-md text-white hover:scale-110 hover:shadow-xl duration-300">
        {!toggle ? <span className="font-bold text-2xl">ON</span> : <span className="font-bold text-2xl">OFF</span>}
      </button>
    </div>
  )
}