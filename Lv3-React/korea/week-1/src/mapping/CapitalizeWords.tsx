import ProblemCard from "../extras/ProblemCard";

export const CapitalizeWords = () => {
  const animals = ["dog", "cat", "bird"];

  return (
    <ProblemCard
      title="Map 03 — Capitalize words"
      method="map"
      question="Render each word with the first letter capitalized, in a div."
      dataPreview={animals}
    >

      {/* write code here */}
      {animals.map(animal => {
        const firstLetter = animal.charAt(0).toUpperCase();
        const restOfAnimal = animal.slice(1);
        
        return <div style={{textTransform: "capitalize"}}>{firstLetter + restOfAnimal}</div>
      }
      )}
    </ProblemCard>
  );
};
