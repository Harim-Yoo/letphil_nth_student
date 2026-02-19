import React from "react";
import ProblemCard from "../extras/ProblemCard";
import { Product } from "./Product";

export const PreFilter = () => {
  const products = [
    { id: 1, name: "Notebook", inStock: true },
    { id: 2, name: "Pen", inStock: false },
    { id: 3, name: "Backpack", inStock: true },
  ];

  const inStockProducts = products.filter((product) => product.inStock);

  return (
    <ProblemCard
      title="Filter 10 — Pre-filtered rendering"
      method="filter"
      question="Filter to in-stock products first, then map into a reusable component."
      dataPreview={products}
    >
      {/* [<Product/>, <Product />] */}
      {inStockProducts.map((product) => <Product prod={product} /> //{ id: 1, name: "Notebook", inStock: true },
      )}
    </ProblemCard>
  );
};
