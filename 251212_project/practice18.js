const fetchProfile = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (id === 999) reject(new Error("유저 없음")); 
        else resolve({ id: id, name: "CodingStar" });
    }, 1000);
});

const fetchPosts = (id) => new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            { id: 1, title: "안녕", likes: 50 },
            { id: 2, title: "자바스크립트 꿀팁", likes: 1200 },
            { id: 3, title: "맛집 추천", likes: 3000 },
            { id: 4, title: "일상", likes: 20 }
        ]);
    }, 1500);
});

async function createReport(userID) {
    console.log(`${userID}번 유저 분석 시작...`);
    let data = {};
    try {
        const [passedID, passedPosts] = await Promise.all([fetchProfile(userID),fetchPosts(userID)]);
        const filteredPosts = passedPosts.filter(post => post.likes>1000);
        // for (let i = 0; i<filteredPosts.length; i++) {
        //     const oldTitle = filteredPosts[i].title
        //     const newTitle = `[HIT] ${oldTitle}`;
        //     filteredPosts[i].title = newTitle;
        // }
        // data.name = passedID.name;
        // data.popularPosts = filteredPosts;
        // data.count = filteredPosts.length;
        // return data;        
        const popularPosts = passedPosts
            .filter(post=>post.likes>1000)
            .map(post => {
                return {...post, title: `[HIT] ${post.title}`};
            });
        data.name = passedID.name;
        data.popularPosts = popularPosts;
        data.count = popularPosts.length;
        return data;     
    } catch(e) {
        console.error("Report error: ", e.message);
    }
}

createReport(1).then(console.log);