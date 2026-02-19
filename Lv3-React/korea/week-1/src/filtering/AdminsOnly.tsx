import ProblemCard from "../extras/ProblemCard";

// users.filter(() => somevalue === value)

export const AdminsOnly = () => {
  const users = [
    { id: 1, name: "Alex", isAdmin: true },
    { id: 2, name: "Casey", isAdmin: false },
    { id: 3, name: "Robin", isAdmin: true },
  ];

  return (
    <ProblemCard
      title="Filter 03 — Filter objects by property"
      method="filter"
      question="Render only the admins."
      dataPreview={users}
    >
      {users.filter((user)=>user.isAdmin).map((user, index)=><p key={index}>{user.name}</p>)}
    </ProblemCard>
  );
};
