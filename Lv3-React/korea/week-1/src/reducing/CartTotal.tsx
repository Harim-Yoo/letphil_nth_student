import ProblemCard from "../extras/ProblemCard";

// cart.reduce((acc, curr) => , default value)

export const CartTotal = () => {
  const cart = [
    { id: 1, name: "Book", price: 10, quantity: 2 },
    { id: 2, name: "Pen", price: 3, quantity: 5 },
    { id: 2, name: "Orange", price: 9, quantity: 5 },
    { id: 2, name: "Backpack", price: 53, quantity: 5 },
  ];

  const totalCost = cart.reduce((acc, curr) => acc += (curr.price * curr.quantity), 0);

  return (
    <ProblemCard
      title="Reduce 09 — Calculate totals"
      method="reduce"
      question="Use reduce() to calculate total cost: sum(price * quantity)."
      dataPreview={cart}
    >
    {totalCost}
    </ProblemCard>
  );
};