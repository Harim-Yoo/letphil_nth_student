import {useState} from 'react';

export const DisplayText = () => {
  const [showText, setShowText] = useState<boolean>(true)
  return(
    <div>
      <button onClick={()=>setShowText(!showText)}>
        {showText ? "Show Text" : "Hide Text"}
      </button>
      {!showText && (
        <div>
          Hello World 
        </div>
      )}
    </div>
  )
}