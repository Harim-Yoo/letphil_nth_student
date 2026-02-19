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

  const count = words.reduce(
    (acc, curr) => {
      if (curr === "apple") {
        return { ...acc, apple: acc.apple + 1 };
      } else if (curr === "banana") {
        return { ...acc, banana: acc.banana + 1 };
      } else {
        return { ...acc, orange: acc.orange + 1 };
      }
    },
    { apple: 0, banana: 0, orange: 0 },
  );

  return (
    <ProblemCard
      title="Reduce 07 — Count occurrences"
      method="reduce"
      question="Use reduce() to count how many times each word appears."
      dataPreview={words}
    >
      {count.apple}
    </ProblemCard>
  );
};
