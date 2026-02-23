import { useState } from "react";

// ==========================================
// 1. Todo List (완료 상태 토글하기)
// ==========================================
/**
 * Components: TodoApp (Parent), TodoItem (Child)
 * Requirements:
 * - Parent stores: Array of todos { id, text, isDone }
 * - Child receives: todo object, onToggle function
 * - Child action: Clicking a button or checkbox toggles the isDone boolean in the parent
 */

const TodoItem = (props:{
  todoItem : {id:number, text:string, isDone:boolean}
  setTrue : (id:number) => void;
  setFalse : (id:number) => void;
}) => { 
  const {todoItem, setTrue, setFalse} = props;  
  return <>
  <div className="flex flex-col justify-center items-center gap-2">
    <p>ID: {todoItem.id}. Task-to-do: {todoItem.text}. DONE? {todoItem.isDone ? "True" : "False"} </p>
    <button onClick={()=>setTrue(todoItem.id)} className="px-3 py-1 bg-slate-200 rounded-xl">Set True</button>
    <button onClick={()=>setFalse(todoItem.id)} className="px-3 py-1 bg-slate-200 rounded-xl">Set False</button>
  </div>
  </>; 

};

export const TodoApp = () => { 
  const [todos, setTodos] = useState([
    { id: 1, text: "coding", isDone: false },
    { id: 2, text: "teaching", isDone: false},
    { id: 3, text: "workout", isDone: false},
  ])
  const changeTrue = (id:number) => {
    setTodos((todos)=>(
      todos.map((item)=>(item.id === id ? {...item, isDone: true} : item ))
    ))
  }
  const changeFalse = (id:number) => {
    setTodos((todos)=>(
      todos.map((item)=>(item.id === id ? {...item, isDone: false} : item))
    ))
  }
  return(
    <div className="flex flex-row justify-evenly items-center py-12">
      {todos.map((item, index)=>(
      <TodoItem 
        key={index}
        todoItem = {item}
        setTrue = {changeTrue}
        setFalse = {changeFalse}
      />
    ))}
    </div>
  ); 
};
