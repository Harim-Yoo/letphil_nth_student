import React from "react";

export const Greeting = ( props: {
  title: string,
  subtitle: string,
  description: string,
  targetRef: React.RefObject<HTMLDivElement|null>
}) => {
  const { title, subtitle, description, targetRef } = props;
  const FunctionInfo = ["UseState", "Toggle", "UseRef"];

  return (
    <div ref={targetRef} className="flex flex-col justify-center items-center h-250 bg-slate-900 text-white gap-10">
      <h1 className="text-5xl font-bold px-5 py-2 bg-amber-900 rounded-xl hover:scale-105 duration-150 cursor-pointer">{title}</h1>
      <h3 className="text-2xl font-medium">{subtitle}</h3>
      <p className="text-xl font-light">{description}</p>
      <div className="flex flex-row gap-5 justify-center items-center w-auto">
      {FunctionInfo.map((item)=>(
        <div className="px-5 py-3 rounded-lg bg-slate-300 text-black w-30 text-center">
          {item}
        </div>
      ))}
      </div>
    </div>
  )
}