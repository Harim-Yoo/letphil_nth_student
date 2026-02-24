import { useState } from "react";

// ==========================================
// 6. Color Theme Selector (배경색 변경하기)
// ==========================================
/**
 * Components: ThemeApp (Parent), ColorSwatch (Child)
 * Requirements:
 * - Parent stores: backgroundColor (string, e.g., "#ff0000")
 * - Child receives: color code, onColorPick function
 * - Child action: Clicking a swatch updates the parent's background color state
 */

const ColorSwatch = (props: {
  colorCode : string;
  onColorPick : (color:string) => void;
}) => {
  const {colorCode, onColorPick} = props;
  
  return(
  <>
    <div className="flex flex-col justify-center items-center py-24"
    style={{backgroundColor:colorCode}}>
      <span> Here is the current color code : {colorCode}</span>
      <button onClick={()=>onColorPick("brown")}>Swatch to Brown</button>
      <button onClick={()=>onColorPick("green")}>Swatch to Green</button>
      <button onClick={()=>onColorPick("yellow")}>Swatch to Yellow</button>
    </div>
  </>); 
};

export const ThemeApp = () => { 
  const [backgroundColor, setBackgroundColor] = useState<string>("#ff0000")

  return(
    <ColorSwatch
      colorCode = {backgroundColor}
      onColorPick = {(color:string)=>setBackgroundColor(color)}
    />
  )

};