const users = [
    { user_id: 1, name: "Alice", email: "alice@math.com" },
    { user_id: 2, name: "Bob", email: "bob@math.com" }
];

function findUser(targetId) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const foundId = users.find(u => u.user_id === targetId);
            foundId ? resolve(foundId) : reject("Found no user in the database.");
        },3000);
    })
}

async function getUserInfo(id) {
    try {
        const userId = await findUser(id);
        console.log(`찾았습니다! ${userId.user_id}를 쓰는 유저는 ${userId.name}입니다!`);
    } catch(error) {
        console.error(error);
        console.log("못찾았어요..ㅠㅠ")
    }
};

getUserInfo(3);