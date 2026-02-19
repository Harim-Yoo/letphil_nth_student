import ProblemCard from "../extras/ProblemCard";

export const CapitalizeWords = () => {
  const animals = ["dog", "cat", "bird"];
  const letterizedAnimals = animals.map((animal)=>animal.split(""));
  const Letters = letterizedAnimals.map((item) => {
          return item.reduce((acc,cur,idx)=>{
            if (idx===0) {
              return acc += cur.toUpperCase()
            } else {
              return acc += cur
            }
          },"")
        });

  return (
    <ProblemCard
      title="Map 03 — Capitalize words"
      method="map"
      question="Render each word with the first letter capitalized, in a div."
      dataPreview={animals}
    >
      {Letters.map((item, index)=><p key={index}>{item}</p>)}
    </ProblemCard>
  );
};
