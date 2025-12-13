const fetchUserById = (id) => new Promise(r => setTimeout(() => r(`User_${id}`), 1000));

const userIds = [1,2,3,4,5];

const getUsers = async() => {
    console.log("Searching all users at once");

    const promises = userIds.map(id => fetchUserById(id));
    const users = await Promise.all(promises);
    console.log(users);
}

getUsers();