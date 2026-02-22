import { useState } from 'react';
import { SquareChevronDown, SquareChevronUp } from 'lucide-react';

const SummaryItem = ({ title, description }: { title: string, description: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col bg-slate-100 text-black rounded-lg p-5 gap-10 w-300">
        <div className="flex flex-row justify-between items-center gap-10">
          <p className="font-bold text-lg p-4">{title}</p>
          <button onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 hover:scale-110 duration-250">
            {isOpen ? <SquareChevronUp /> : <SquareChevronDown />}
          </button>
        </div>

        {isOpen && (
          <div className="bg-slate-800 text-white p-5 text-md rounded-lg">
            {description}
          </div>
        )}
      </div>
    </>
  )
}

export const DisplayText = (props: {
  targetRef: React.RefObject<HTMLDivElement | null>
}) => {
  const { targetRef } = props;
  const SummaryTexts = [
    {
      title: "What do we know about UseState?",
      description: "It is the most essential tool for managing changing data (state) in React. Whenever the value changes, it smartly triggers React to automatically re-render the screen with the latest updates."
    },
    {
      title: "What do we know about Toggle?",
      description: "Just like flipping a light switch, it is a feature that alternates between two states (On/Off or True/False). It is a highly useful pattern for showing or hiding specific elements on a webpage."
    },
    {
      title: "What do we know about UseRef?",
      description: "It acts like a 'laser pointer' that allows you to directly access specific HTML elements. It is also used as a 'secret pocket' to quietly store data without causing the screen to re-render when the value changes."
    }
  ];
  return (
    <div ref={targetRef} className="flex flex-col justify-evenly items-center w-full min-h-200 py-30 bg-slate-800 text-white gap-10">

      <h2 className="text-2xl font-bold text-white px-5 py-2 bg-amber-900 rounded-xl hover:scale-105 duration-150 w-75 text-center">Summary</h2>
      {SummaryTexts.map((item, index) => {
        return (
          <>
            <SummaryItem
              key={index}
              title={item.title}
              description={item.description}
            />
          </>
        )
      })}

    </div>
  )
}