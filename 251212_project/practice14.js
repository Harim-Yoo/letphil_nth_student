const fetchUser = () => new Promise(r => setTimeout(()=> r("Coding Parner"),2000));
const fetchOrders = () => new Promise(r => setTimeout(()=> r(["order1","order2"]),1000));

const getAllData = async () => {
    console.log("Fetching all data altogether");

    const [user, orders] = await Promise.all([fetchUser(), fetchOrders()]);
    console.log(`User is ${user}`);
    console.log(`Orders are ${orders}`);
};

getAllData();