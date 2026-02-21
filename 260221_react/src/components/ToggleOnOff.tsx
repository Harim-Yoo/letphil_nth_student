import { useState } from "react"
export const ToggleOnOff = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <button onClick={()=>setToggle(!toggle)}>
      {!toggle ? "ON" : "OFF"}
    </button>
  )
}