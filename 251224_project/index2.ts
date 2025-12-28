interface Student {
    id : number;
    name : string;
    score : number;
    isActive : boolean;
}

const students: Student[] = [
  { id: 1, name: "Alice", score: 85, isActive: true },
  { id: 2, name: "Bob", score: 65, isActive: false }, // Bob dropped out
  { id: 3, name: "Charlie", score: 92, isActive: true },
  { id: 4, name: "David", score: 45, isActive: true },
  { id: 5, name: "Eve", score: 78, isActive: true },
];

// const topStudents : Student[] = students
//     .filter(item => item.isActive && item.score>80)
//     .sort((a,b)=> b.score-a.score)
//     .slice(0,1);

// console.log(topStudents);

// const theRollCall: string[] = students.filter(item => item.isActive).map(item => item.name);
// console.log(theRollCall);

const newRoster: Student[] = students.map(item => item.score+5);
