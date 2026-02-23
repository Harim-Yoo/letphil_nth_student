import { useState } from "react";
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
  item: {id:number, name:string, quantity:number, price:number};
  onIncrease: (id:number)=>void;
}) => {
  const {item, onIncrease} = props;

  return <>
    <div className="flex flex-col justify-center items-center gap-5 py-8">
    <span>{item.name} : ${item.price} with {item.quantity}</span>
    <span>Total Price: ${item.price*item.quantity}</span>
    <button onClick={()=>onIncrease(item.id)} className="p-3 rounded-xl bg-amber-900 text-white hover:scale-105 duration-150">Increase Quant</button>
    </div>
  </>;
};

export const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Orange", quantity: 0, price: 12 },
    { id: 2, name: "Apple", quantity: 0, price: 6 },
    { id: 3, name: "Banana", quantity: 0, price: 8 },
  ]);
  const increaseHandler = (id:number) => {
    setCart((cart) => 
      cart.map(
        (item)=>
          (item.id === id ? {...item, quantity: item.quantity+1 } : item )
      )
    );
  }
  return (
    <div className="flex flex-col bg-slate-100">
      {cart.map((item, index)=>(
        <CartItem
          key={index}
          item={item}
          onIncrease={increaseHandler}
        />
      ))}
    </div>
  );
};