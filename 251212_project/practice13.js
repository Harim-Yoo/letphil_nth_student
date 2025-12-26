// Practicing with arrow functions
const arrowMultiply = ((a,b)=>a*b);
console.log(arrowMultiply(3,4));

// Practicing with async/await functions

function fetchUser() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Coding Partner");
        },2000);
    });
}

async function getUserData() {
    console.log("Loading Data...");
    try {
        const user = await fetchUser();
        console.log("Welcome", user);
    } catch(error) {
        console.error(error.message);
    }
}

getUserData();