import ProblemCard from "../extras/ProblemCard";

export const CaseInsensitive = () => {
  const names = ["Ava", "liam", "Noah", "MIA", "Zoe"];
  return (
    <ProblemCard
      title="Filter 05 — Case-insensitive filtering"
      method="filter"
      question='Render only names that include the letter "a" (case-insensitive).'
      dataPreview={names}
    >
      {names.filter((name)=>name.toLowerCase().startsWith("a")).map((name, index)=><p key={index}>{name}</p>)}
    </ProblemCard>
  );
};
