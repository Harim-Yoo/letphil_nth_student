import ProblemCard from "../extras/ProblemCard";

export const CategorySum = () => {
  const expenses = [
    { id: 1, category: "Food", amount: 15 },
    { id: 2, category: "Transport", amount: 50 },
    { id: 3, category: "Food", amount: 25 },
    { id: 4, category: "Entertainment", amount: 40 },
  ];

  return (
    <ProblemCard
      title="Reduce 1004 — Conditional Sum"
      method="reduce"
      question="Use reduce() to find the total amount spent specifically on 'Food'."
      dataPreview={expenses}
    >
      <div>
        {expenses.reduce((acc,cur) => cur.category === "Food" ? acc + cur.amount : acc, 0)}
      </div>
    </ProblemCard>
  );
};