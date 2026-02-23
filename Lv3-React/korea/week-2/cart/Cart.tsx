import React, { useState } from "react";

/**
 * Make a cart system where the parent stores quantity, but the child updates it.
 * Components
 *      - Cart (parent)
 *      - CartItem (child)
 *      - CartItem (child)
 * Requirements
 *      - Cart stores state: quantity
 *      - CartItem receives:
 *      - quantity
 *      - onIncrease()
 *      - onDecrease()
 *      - Buttons in child update parent state
 */

const CartItem = (props: {
  quantity: number;
  onIncrease(): (quantity:number) => void;
  onDecrease(): (quantity:number) => void;
}) => {
  return <></>
}

export const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Orange", quantity: 0, price: 12 },
    { id: 2, name: "Apple", quantity: 0, price: 6 },
    { id: 3, name: "Banana", quantity: 0, price: 8 },
  ]);

  return <div></div>;
};
