import ProblemCard from "../extras/ProblemCard";

/**
 * Render out the list of numbers
 * nums.map(() => )
 */

export const RenderNumbers = () => {
  const numbers = [1, 2, 3, 4];

  return (
    <ProblemCard
      title="Map 02 — Render numbers as text"
      method="map"
      question='Render each number as: "Number: X".'
      dataPreview={numbers}
    >
      <div style={{ color: "black"}}>
        {numbers.map((num) => {
          return <div>Numbers: {num}</div>;
        })}
      </div>
    </ProblemCard>
  );
};
