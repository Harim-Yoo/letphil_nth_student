import { useState } from 'react'

function App() {
  const [order, setOrder] = useState({ name: "메뉴를 정해주세요", price: 0 });
  const menuList = [
    { name: "피자", price: 10000 },
    { name: "치킨", price: 20000 },
    { name: "샐러드", price: 15000 }
  ]
  return (
    <div>
    <div> 오늘의 메뉴: { order.name } with { order.price }</div >
  {
    menuList.map((item) => (
      <button
        key={item.name}
        onClick={() => setOrder(item)}>
        {item.name}
      </button>
    ))
  }
  </div>
)
}

export default App
