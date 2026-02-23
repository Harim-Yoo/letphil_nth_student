import './App.css'
import { Counter } from '../counter/Counter'
import { Cart } from '../cart/Cart'
import { TodoApp } from '../selfmade-practices/ToDo'

function App() {
  return (
    <>
    <div className="flex flex-col w-full min-h-screen">
     <Counter
      step = {4}
    />
    <Cart/>
    <TodoApp/>
    </div>
    </>
  )
}

export default App
