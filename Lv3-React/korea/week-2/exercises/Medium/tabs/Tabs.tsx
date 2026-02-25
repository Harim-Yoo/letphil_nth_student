import { useState } from "react"

// Requirements
// State: activeTabId
//  - Render a row of tab buttons from an array:
//  - { id, label, content }
// Clicking a tab shows its content
// Active tab button has a visual indicator (e.g., underline)

type Tab = {
  id : number;
  label: string;
  content: string;
}

export const Tabs = () => {
  const [activeTabId, setActiveTabId] = useState<number>(0);

  const tabBtns : Tab[] = [
    {
      id: 1,
      label: "Home",
      content: "Hello World1"
    },
    {
      id: 2,
      label: "About",
      content: "Hello World2"
    },
    {
      id: 3,
      label: "Footer",
      content: "Hello World3"
    }
  ]

  return (
    <>
      <div className="flex flex-col justify-center items-center">Tabs</div>
      <div className="flex justify-center items-center gap-5">
        {tabBtns.map((tab) => <button key={tab.id} onClick={() => setActiveTabId(tab.id)} style={(activeTabId == tab.id ? { textDecoration: "underline" } : {})}>{tab.label}</button>
        )}
      </div>
      <div className="flex flex-col justify-center items-center">
        {tabBtns.find(tab => tab.id === activeTabId)?.content}
      </div>
    </>
  )
}
