import React from "react";
import ProblemCard from "../extras/ProblemCard";

export const CountOccurences = () => {
  const words = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple",
    "apple",
    "apple",
    "apple",
  ];

  const count = words.reduce((a,c)=> {
    a[c] = (a[c]||0) + 1;
    return a;
  }, {} as Record<string,number>);

  return (
    <ProblemCard
      title="Reduce 07 — Count occurrences"
      method="reduce"
      question="Use reduce() to count how many times each word appears."
      dataPreview={words}
    >
      {Object.entries(count).map((item,idx) => <p key={idx}>{item[0]}:{item[1]}</p>)}
    </ProblemCard>
  );
};
