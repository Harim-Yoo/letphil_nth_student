import ProblemCard from "../extras/ProblemCard";
import React from "react";

export const FullNames = () => {
  const people = [
    { firstName: "Taylor", lastName: "Kim" },
    { firstName: "Jordan", lastName: "Lee" },
  ];
  return (
    <ProblemCard
      title="Map 10 — Transform shape"
      method="map"
      question="Render full names by combining firstName + lastName."
      dataPreview={people}
    >
      {people.map((person, index)=><p key={index}>{person.firstName + " " + person.lastName}</p>)}
    </ProblemCard>
  );
};
