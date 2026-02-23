import ProblemCard from "../extras/ProblemCard";

export const ActiveUserCount = () => {
  const users = [
    { id: 1, username: "dev_guy", isActive: true },
    { id: 2, username: "coding_girl", isActive: false },
    { id: 3, username: "react_ninja", isActive: true },
    { id: 4, username: "node_master", isActive: true },
  ];

  return (
    <ProblemCard
      title="Reduce 1003 — Count Specific Items"
      method="reduce"
      question="Use reduce() to count how many users are active."
      dataPreview={users}
    >
      <div>
        {users.reduce((acc,cur)=> cur.isActive ? acc+1 : acc,0)}
      </div>
    </ProblemCard>
  );
};