import { CharacterCount } from '../exercises/Easy/char_count/CharacterCount'
import { Counter } from '../exercises/Easy/counter/Counter'
import { Cart } from '../exercises/Hard/cart/Cart'
import { SignupForm } from '../exercises/Medium/signup/SignupForm'
import { Tabs } from '../exercises/Medium/tabs/Tabs'
import { TodoApp } from '../exercises/Medium/todo/TodoApp'
import { Api } from '../exercises/useEffect/Api'
import { Example } from '../exercises/useEffect/Example'
import { WindowWidthTracker } from '../exercises/useEffect/WindowWidthTracker'

function App() {
  return (
    <>
    <div className="flex flex-col w-full min-h-screen">
    <CharacterCount/>
    <Counter/>
    <SignupForm/>
    <Tabs/>
    <TodoApp/>
    <Cart/>
    <Api/>
    <WindowWidthTracker/>
    </div>
    </>
  )
}

export default App
