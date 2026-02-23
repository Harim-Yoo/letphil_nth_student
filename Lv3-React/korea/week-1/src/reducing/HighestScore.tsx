import ProblemCard from "../extras/ProblemCard";

export const HighestScore = () => {
  const students = [
    { id: 1, name: "Alice", score: 85 },
    { id: 2, name: "Bob", score: 92 },
    { id: 3, name: "Charlie", score: 88 },
    { id: 4, name: "David", score: 79 },
  ];

  return (
    <ProblemCard
      title="Reduce 1002 — Find Maximum Value"
      method="reduce"
      question="Use reduce() to find the highest score among all students."
      dataPreview={students}
    >
      <div>
        {students.reduce((acc,cur)=>{
          if (cur.score >=acc) {
            return acc = cur.score
          } 
          return acc
        },0)}
      </div>
    </ProblemCard>
  );
};