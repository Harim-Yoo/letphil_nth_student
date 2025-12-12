function unstableFetch() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        setTimeout(() => {
            if (success) resolve("성공했습니다! 🎉");
            else reject(new Error("통신 에러 💥"));
        }, 500);
    });
}

async function fetchWithRetry() {
    console.log("데이터 요청 시작");

    for (let i = 0 ; i < 3 ; i++ ) {
        try {
            const results = await unstableFetch();
            console.log(results);
            return results;
        } catch(e) {
            console.error("실패했습니다",e.message);
        }
    };
}

fetchWithRetry();