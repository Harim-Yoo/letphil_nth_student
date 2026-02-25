import { useState } from "react";

/**
 * Goal
 * Build a basic todo list with state stored in parent and tasks displayed by child components.
 * Components
 *      - TodoApp (parent)
 *      - TodoList (child)
 *      - TodoItem (child)
 * Requirements
 *      - Parent state: tasks (array of strings)
 *      - Input + button adds tasks
 *      - TodoList receives tasks as prop and maps into TodoItem
 *      - Stretch
 *      - Add ability to delete a task:
 *      - Parent passes onDelete(index) to child
 *      - Add ability to mark task complete:
 *      - tasks become objects { text, completed }
 */

const TodoList = (props: {
  tasks: string[]
}
) => {
  const {tasks} = props;
  return(
  <div>{tasks.map((task:string)=><TodoItem mappedItem={task}/>)}</div>
  );
};

const TodoItem = (props: {mappedItem: string}) => {
  const {mappedItem} = props;
  return <div key={mappedItem.length} className="px-3 py-2 bg-slate-100">
    What to do today: {mappedItem}
  </div>};

export const TodoApp = () => {
  const [tasks,setTasks] = useState<string[]>(["Coding", "Workout", "Chores"]);
  const [task, setTask] = useState<string>("");
  const addTask = (task:string) => {
    if (task === "") {
      alert("You put no input."); 
      return;
    }
    setTasks((tasks)=>[...tasks,task]);
    setTask("");
  }
  return <>  
  <div>TodoApp</div>
  <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} className="bg-slate-100"/>
  <button onClick={()=>addTask(task)}>Add</button>
    <TodoList 
    tasks = {tasks}
    />
  </>
  ;
};
