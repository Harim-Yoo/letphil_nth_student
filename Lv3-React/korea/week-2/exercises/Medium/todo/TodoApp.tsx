import React from "react";

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

export const TodoApp = () => {
  return <div>TodoApp</div>;
};
