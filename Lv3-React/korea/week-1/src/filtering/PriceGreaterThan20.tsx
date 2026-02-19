import ProblemCard from "../extras/ProblemCard";

// filter((ele) => conditional) => [ele, ele, ele]
// map((ele) => <div>{ele.name}</div>)

export const PriceGreaterThan20 = () => {
  const products = [
    { id: 1, name: "Sticker Pack", price: 5 },
    { id: 2, name: "Keyboard", price: 55 },
    { id: 3, name: "Mousepad", price: 22 },
  ];

  const filterItem = products.filter((product) => product.price > 20);

  return (
    <ProblemCard
      title="Filter 04 — Filter by value"
      method="filter"
      question="Render products with price > 20."
      dataPreview={products}
    >
      {filterItem.map((item) => (
        <div>
          {item.name}, {item.price}
        </div>
      ))}
    </ProblemCard>
  );
};
