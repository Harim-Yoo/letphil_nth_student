import ProblemCard from "../extras/ProblemCard";

export const SumNumbers = () => {
  const nums = [1, 2, 3, 4];

  return (
    <ProblemCard
      title="Reduce 01 — Sum numbers"
      method="reduce"
      question="Use reduce() to compute the sum, then render it."
      dataPreview={nums}
    >
      <div>
      {nums.reduce((acc,cur)=>{
        return acc += cur
      },0)}
      </div>
    </ProblemCard>
  );
};

