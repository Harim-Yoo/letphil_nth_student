export const CartItem = (props:{
  quantity: number;
  onIncrease : ()=>void;
  onDecrease : ()=>void;
}) => {
  const {quantity, onIncrease, onDecrease} = props;
  return <>
    <span>We have the following quantity :{quantity}</span>
    <button onClick={onIncrease} className="px-3 py-1 bg-green-100">Increase</button>
    <button onClick={onDecrease} className="px-3 py-1 bg-red-200">Decrease</button>
  </>;
};