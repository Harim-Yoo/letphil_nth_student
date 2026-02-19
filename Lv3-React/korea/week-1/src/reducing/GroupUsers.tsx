import React from 'react'
import ProblemCard from '../extras/ProblemCard';

export const GroupUsers = () => {
  const users = [
    { id: 1, name: "Ava", role: "admin" },
    { id: 2, name: "Noah", role: "user" },
    { id: 3, name: "Mia", role: "user" },
  ];
  return (
    <ProblemCard
      title="Reduce 06 — Group items"
      method="reduce"
      question="Use reduce() to group users by role. (Example: { admin: [...], user: [...] })"
      dataPreview={users}
    >
      <div>
        {/* TODO: const grouped = users.reduce((acc, u) => {...}, {} as Record<string, typeof users>) */}
      </div>
    </ProblemCard>
  );
}
