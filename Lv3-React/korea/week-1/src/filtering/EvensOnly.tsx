// nums.filter(() => conditional) => [num, num].map(() => <div></div>)
import ProblemCard from "../extras/ProblemCard";
export const EvensOnly = () => {
  const nums = [1, 2, 3, 4, 5];

  return (
    <ProblemCard
      title="Filter 01 — Even numbers only"
      method="filter"
      question="Filter the array to only even numbers, then render them."
      dataPreview={nums}
    ></ProblemCard>
  );
};
