// CREATE

// const users = [
//     {
//         user_id:1, name:"Alice", email: "alice@math.com"
//     },
//     {
//         user_id:2, name:"Bob", email: "bob@math.com"
//     }
// ]

// function signUp(newName,newEmail) {
//     const existingUser = users.find(u => u.email === newEmail);
//     if (existingUser) {
//         return "이미 가입되어있는 이메일입니다.";
//     }
//     users.push(
//         {
//             user_id : users.length+1,
//             name: newName,
//             email: newEmail
//         }
//     );
//     return "가입 성공:" + newName;
// }

// signUp('Charlie', 'charlie@math.com');
// console.log(users);

// READ (pass)
// Update
// Delete

const problems = [
    { problem_id: 501, text: "2+2=?"},
    { problem_id: 502, text: "3x=9. What is x?"},
    { problem_id: 503, text: "다음을 미분하시오."},
]

// index 찾기
function deleteProblem(targetId) {
    const index = problems.findIndex(p => p.problem_id === targetId);
    if (index===-1) {
        return "삭제할 문제가 없습니다."
    } else {
        problems.splice(index,1);
        return targetId + "번째 문제가 삭제되었습니다.";
    }
    
}

console.log(deleteProblem(501));
console.log(problems);