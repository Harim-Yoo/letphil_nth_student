import ProblemCard from '../extras/ProblemCard';

export const GroupUsers = () => {
  const users = [
    { id: 1, name: "Ava", role: "admin" },
    { id: 2, name: "Noah", role: "user" },
    { id: 3, name: "Mia", role: "user" },
  ];
  
  const grouped = users.reduce((acc,u)=>{
    if (!acc[u.role]) {
      acc[u.role] = []
    }  
    acc[u.role].push(u.name)
    return acc
  },{} as Record<string, string[]>);

  return (
    <ProblemCard
      title="Reduce 06 — Group items"
      method="reduce"
      question="Use reduce() to group users by role. (Example: { admin: [...], user: [...] })"
      dataPreview={users}
    >
      {grouped}
    </ProblemCard>
  );
}
