import React from "react";
import ProblemCard from "../extras/ProblemCard";

export const SearchSimulation = ({ searchTerm }: any) => {
  const items = ["React", "JavaScript", "TypeScript", "Node", "CSS"];
  return (
    <ProblemCard
      title="Filter 08 — Search simulation"
      method="filter"
      question="Filter items that include the searchTerm prop (case-insensitive), then render them."
      dataPreview={{ items, searchTerm: searchTerm }}
    >
      {items.filter((item)=>item.toLowerCase().includes(searchTerm?.toLowerCase())).map((item)=><p key={item}>{item}</p>)}
    </ProblemCard>
  );
};
