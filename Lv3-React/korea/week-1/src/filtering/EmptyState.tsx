import ProblemCard from "../extras/ProblemCard";
import React from "react";

export const EmptyState = () => {
  const items = ["Apple", "Banana"];
  const searchTerm = "zzz";
  const searchItems = items.filter((item)=>item===searchTerm)
  return (
    <ProblemCard
      title="Filter 09 — Empty state handling"
      method="filter"
      question='Filter by searchTerm. If no results, show "No results found".'
      dataPreview={{ items, searchTerm }}
    >
      { 
      searchItems.length !== 0 ?  
      searchItems.map((user)=><p>{user}</p>) :
      <p>"No results found."</p>
      }
    </ProblemCard>
  );
};
