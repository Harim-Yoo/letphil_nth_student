// ARRAY METHODS HOMEWORK – MINI TASK LIST
// ------------------------------------------------------
// GOAL: Manage a small task list using array methods and log changes
//       to the console.

// STEP 1: Create an array called tasks that starts with 3 task strings.
//         Example:
//         "Study JavaScript", "Drink water", "Go for a walk"

// STEP 2: Use console.log to show the initial tasks array.

// STEP 3: Use .push() to add a new task to the end,
//         then log the tasks array again.

// STEP 4: Use .unshift() to add a "priority" task at the beginning,
//         then log the tasks array again.

// STEP 5: Use .pop() to remove the last task.
//         Save the removed task in a variable called removedTask.
//         Log a message that shows which task was removed.

// STEP 6: Use .forEach() to log each remaining task with a number,
//         for example:
//         "1. Study JavaScript"
//         "2. Drink water"
//         etc.

// STEP 7: Use .filter() to create a new array called longTasks
//         that only keeps tasks with a length greater than, for example, 15 characters.
//         (task.length > 15)

// STEP 8: Log longTasks to see which tasks were kept.

const tasks = ["Study Javascript", "Drink Coffee", "Workout"];
console.log(tasks);

tasks.push("Study Typescript");
console.log(tasks);

tasks.unshift("Priority:Wake Up Early");
console.log(tasks);

const removedTask = tasks.pop();
console.log(`Hey, ${removedTask} is removed!`);
console.log("---------------------------------------------");

tasks.forEach((item, index) => console.log(`${index + 1}. ${item}`));
console.log('---------------------------------------------');
tasks.forEach((item) => console.log(`${tasks.indexOf(item) + 1}. ${item}`)); // indexOf() method gives back index of an array. But, this is extremely slow and inefficient because V8 Engine has to return to the original memory again to fetch everything. 
console.log("---------------------------------------------");
tasks.reduce((acc, cur, idx) => {
    console.log(`${idx + 1}. ${cur}`)
    return acc;
}, null); // I thought, "can I use reduce method?" Well. I guess we can. 
console.log("---------------------------------------------");

const longTasks = tasks.filter((item) => item.length > 15); // Easy way of using in-built filter method.
const BetterLongTasks = tasks.reduce((acc, cur) => {
    if (cur.length > 15) {
        acc.push(cur);
        return acc;
    }
    return acc;
}, []); // Reduce is the best.

console.log(longTasks);
console.log(BetterLongTasks);
console.log(longTasks !== BetterLongTasks); // Of course, longTasks and BetterLongTasks have different memories allocated in the stack and heap, so they must be different.
