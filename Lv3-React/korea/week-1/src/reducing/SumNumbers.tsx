import React from "react";

const SumNumbers = () => {
  const nums = [1, 2, 3, 4];

  return (
    <ProblemCard
      title="Reduce 01 — Sum numbers"
      question="Use reduce() to compute the sum, then render it."
      dataPreview={nums}
    >
      <div></div>
    </ProblemCard>
  );
};
