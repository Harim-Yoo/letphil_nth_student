import { useState } from "react";
import { CartItem } from "./CartItem";
/**
 * Make a cart system where the parent stores quantity, but the child updates it.
 * Components
 *      - Cart (parent)
 *      - CartItem (child)
 * Requirements
 *      - Cart stores state: quantity
 *      - CartItem receives:
 *      - quantity
 *      - onIncrease()
 *      - onDecrease()
 *      - Buttons in child update parent state
 */

type CartData = {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export const Cart = () => {
  const [items, setItems] = useState<CartData[]>([
    { id: 1, name: "Orange", quantity: 0, price: 12 },
    { id: 2, name: "Apple", quantity: 0, price: 6 },
    { id: 3, name: "Banana", quantity: 0, price: 8 },
  ]);

  const changeFunc = (id:number, change: number) => {
    const targetItem = items.find(item=> item.id === id)
    if (targetItem && (targetItem.quantity + change) <0) return;
    const nextItems = items.map(item => item.id === id ? {...item, quantity: item.quantity+change } : item )
    setItems(nextItems);
  }
  
  return <>
    {items.map((item)=> (
      <div key = {item.id} className="flex flex-row justify-center gap-5">
      <span>{item.name}: {item.quantity} with $ {item.price}</span>
      <CartItem 
        quantity= {item.quantity}
        onIncrease = {() => changeFunc(item.id, 1)}
        onDecrease = {() => changeFunc(item.id, -1)}
      />
      </div>
    ))
    }
    </>
};
