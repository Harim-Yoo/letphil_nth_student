import {useState} from "react";
// Requirements
// State: text
// Show:
//  - vcharacters used (text.length)
//  - vcharacters remaining (limit = 120)
// If over the limit:
//  - show an error message
//  - disable the “Submit” button

export const CharacterCount = () => {
  const [text, setText] = useState("");
  const vchars_length = text.length;
  const vchars_limit = 20;
  return(
    <>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Type Here"/>
    <button disabled={vchars_length < vchars_limit} >Submit</button>
    <span>The number of characters used: {vchars_length}</span>
    {vchars_length >= vchars_limit ? alert("Error") : null}
    </>
  )
};
