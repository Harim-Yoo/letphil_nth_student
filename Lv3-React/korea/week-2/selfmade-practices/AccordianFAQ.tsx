import { useState } from "react";

// ==========================================
// 7. Accordion / FAQ (하나만 열리게 하기)
// ==========================================
/**
 * Components: Accordion (Parent), AccordionItem (Child)
 * Requirements:
 * - Parent stores: openItemId (number | null)
 * - Child receives: item data, isOpen (boolean), onToggle function
 * - Child action: Clicking an item opens it. If it's already open, clicking it again closes it (sets to null).
 */

const AccordianItem = (props: {
  itemData: Item;
  isOpen: boolean;
  btnToggle: (id: number) => void;
}) => {
  const { itemData, isOpen, btnToggle } = props;
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 py-5">
        {isOpen && (
          <>
            Data : {itemData.data}
          </>
        )}

        <button onClick={() => btnToggle(itemData.id)}>Toggle</button>
      </div>
    </>
  )
}

type Item = {
  id: number;
  data: string
}

export const Accordion = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null)

  const findWhatToOpen = (id: number) => {
    setOpenItemId(openItemId === id ? null : id)
  }

  const items: Item[] = [
    {
      id: 1,
      data: "Hello World"
    },
    {
      id: 2,
      data: "Bye World"
    }
  ]

  return (
    <div className="bg-slate-100">
      {items.map((item) =>
        <AccordianItem
          key={item.id}
          itemData={item}
          isOpen={item.id === openItemId}
          btnToggle={(id: number) => findWhatToOpen(id)}
        />)}
    </div>
  );
};