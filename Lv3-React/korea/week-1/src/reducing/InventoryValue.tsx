
import ProblemCard from "../extras/ProblemCard";

export const InventoryValue = () => {
  const inventory = [
    { id: 1, name: "Laptop", price: 1000, quantity: 2 },
    { id: 2, name: "Phone", price: 500, quantity: 5 },
    { id: 3, name: "Tablet", price: 300, quantity: 0 },
    { id: 4, name: "Headphones", price: 100, quantity: 10 },
  ];

  return (
    <ProblemCard
      title="Reduce 1001 — Calculate Total Value"
      method="reduce"
      question="Use reduce() to calculate the total value of all items in stock (price * quantity)."
      dataPreview={inventory}
    >
      <div>
        {inventory.reduce((acc,cur) => {
          acc+=cur.price * cur.quantity
          return acc
        }, 0)}
      </div>
    </ProblemCard>
  );
};