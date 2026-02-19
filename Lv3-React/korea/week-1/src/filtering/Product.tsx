import React from "react";
import { ProductType } from "../types/product.types";

export const Product = ({ prod: { id, name } }: ProductType) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  );
};
