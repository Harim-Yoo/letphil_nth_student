import React from "react";
import { ProductType } from "../types/product.types";

export const Product = ({ prod }: ProductType) => {
  return (
    <div>
      <p>{prod.id}</p>
      <p>{prod.name}</p>
    </div>
  );
};
