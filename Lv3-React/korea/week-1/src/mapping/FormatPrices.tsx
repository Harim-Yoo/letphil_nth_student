import ProblemCard from "../extras/ProblemCard";

export const FormatPrices = () => {
  const prices = [3.5, 10, 2, 7.4, 20.88];
  return (
    <ProblemCard
      title="Map 09 — Format data"
      method="map"
      question="Render each number as currency with 2 decimals: $3.50, $10.00, ..."
      dataPreview={prices}
    >
      {
        prices.map((num, index)=><p key={index}>{"$"+num.toFixed(2)}</p>)
      }
    </ProblemCard>
  );
};
