import ProblemCard from "../extras/ProblemCard";

export const Stats = () => {
  const nums = [4, 9, 2, 10, 7];
  const total = nums.reduce((acc,cur)=>acc += cur, 0);
  const max = nums.reduce((acc,cur) => {
    if (cur>=acc) {
      return acc = cur
    } else 
      return acc
  }, 0)
  return (
    <ProblemCard
      title="Reduce 10 — Reduce + render summary stats"
      method="reduce"
      question="Use reduce() to compute: total, max, and average. Then render them."
      dataPreview={nums}
    >
      <div>
        {/* TODO:
            - total via reduce
            - max via reduce
            - average = total / nums.length
        */}
        Total : {total}
        Max : {max}
        Average : {total/nums.length}
      </div>
    </ProblemCard>
  );
};
