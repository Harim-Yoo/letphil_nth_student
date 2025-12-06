import express from "express";
import cors  from "cors";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

let posts = [
    {id:1, title:"Original Post", body:"I am here"}
]

app.get('/posts/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p=> (p.id == id));
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: "Post Not Found"});
    };
});

app.post('/posts', (req,res) => {
    const { title, body } = req.body;
    if (!title || !body) {
        return res.status(404).json({message: "Title and Body are required"});
    }
    const newId = posts.length > 0 ? posts[posts.length-1].id + 1 : 1 ; 
    const newPost = {
        id: newId,
        title: title,
        body: body
    };
    posts.push(newPost);
    console.log("Saved:", newPost);

    res.status(201).json(newPost);
})

app.listen(port, ()=> {
    console.log(`The port is open at http://localhost:${port}`);
})

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
// READ from CRUD
// async function getPost(id) {
//     try {
//         const response = await fetch(`${BASE_URL}/${id}`);
//         if (!response.ok) {
//             console.log(`We have a problem: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch(error) {
//         console.error(error);
//     }
// }
// CREATE from CRUD

// async function createPost() {
//     try {
//         const response = await fetch(BASE_URL, {
//             method: "POST",
//             headers: {
//                 "Content-Type" : "application/json; charset=UTF-8"
//             },
//             body: JSON.stringify({
//                 title: "my first article",
//                 body: "practicing CRUD",
//                 userId: 1,
//             })
//         });
//         const data = await response.json();
//         console.log("The following data has been posted", data);
//     } catch(error) {
//         console.error(error);
//     }
// };

// createPost();

// getPost(101);


