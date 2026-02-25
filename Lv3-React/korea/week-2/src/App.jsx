import { CharacterCount } from '../exercises/Easy/char_count/CharacterCount'
import { Counter } from '../exercises/Easy/counter/Counter'
import { SignupForm } from '../exercises/Medium/signup/SignupForm'
import { Tabs } from '../exercises/Medium/tabs/Tabs'
import { TodoApp } from '../exercises/Medium/todo/TodoApp'
function App() {
  return (
    <>
    <div className="flex flex-col w-full min-h-screen">
    <CharacterCount/>
    <Counter/>
    <SignupForm/>
    <Tabs/>
    <TodoApp/>
    </div>
    </>
  )
}

export default App
