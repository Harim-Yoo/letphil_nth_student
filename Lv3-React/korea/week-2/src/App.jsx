import './App.css'
import { Counter } from '../counter/Counter'
import { Cart } from '../cart/Cart'
import { TodoApp } from '../selfmade-practices/ToDo'
import { ThemeApp } from '../selfmade-practices/ColorThemeSelector'
import { AttendanceRoster } from '../selfmade-practices/EmployeeAttendance'
import { Accordion } from '../selfmade-practices/AccordianFAQ'
import { ProductPage } from '../selfmade-practices/FilterCategory'
import { PostList } from '../selfmade-practices/LikeList'
import { QuizManager } from '../selfmade-practices/QuizGame'

function App() {
  return (
    <>
    <div className="flex flex-col w-full min-h-screen">
     <Counter
      step = {4}
    />
    <Cart/>
    <TodoApp/>
    <ThemeApp/>
    <AttendanceRoster/>
    <Accordion/>
    <ProductPage/>
    <PostList/>
    <QuizManager/>
    </div>
    </>
  )
}

export default App
