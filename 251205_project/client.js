async function createPost() {
    try {
        const response = await fetch('http://localhost:5000/posts', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                title: "my first article",
                body: "practicing CRUD",
                userId: 1,
            })
        });
        const data = await response.json();
        console.log("The following data has been posted", data);
    } catch(error) {
        console.error(error);
    }
};

createPost();