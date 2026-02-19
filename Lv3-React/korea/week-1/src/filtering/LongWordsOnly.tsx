import ProblemCard from "../extras/ProblemCard";

export const LongWordsOnly = () => {
  const words = ["tiny", "short", "bigger", "elephant", "cat"];

  return (
    <ProblemCard
      title="Filter 02 — Filter strings by length"
      method="filter"
      question="Render only words longer than 4 characters."
      dataPreview={words}
    ></ProblemCard>
  );
};
