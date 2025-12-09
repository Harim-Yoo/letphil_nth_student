const probId = document.getElementById('probId');
const probStatement = document.getElementById('probStatement');
const typeAnswer = document.getElementById('typeAnswer');
const checkBtn = document.getElementById('checkBtn');
const nextBtn = document.getElementById('nextBtn');
const feedbackMsg = document.getElementById('feedbackMsg');

let currentId = 1;

async function getData(id) {
    try {
        const response = await fetch(`/problems/${id}`);
        if (!response.ok) {
            alert(
              "You have reached the last problem. We go back to the first problem."
            );
            currentId = 1;
            getData(1);
            return;
        }
        const problem = await response.json();
        probId.textContent = `Problem ${id} : ${problem.title}`;
        probStatement.innerHTML = problem.body;

        if (window.MathJax && window.MathJax.typesetPromise) {
          MathJax.typesetPromise();
        }

    } catch(error) {
        console.error(error);
    }
}

getData(currentId);

typeAnswer.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        checkBtn.click();
    }
});

checkBtn.addEventListener('click', async () => {
    try {
        const answerText = typeAnswer.value.trim();
        if (!answerText) {
            alert("Please type an answer");
            return;
        }
        const answerTyped = parseInt(answerText);

        const response = await fetch(`/check/${currentId}/${answerTyped}`);

        if (!response.ok) {
            alert("Something went wrong with the answer");
            return;
        }

        const resultData = await response.json();

        if (resultData.correct === true) {
            feedbackMsg.textContent = "You are correct, Great job!"
            feedbackMsg.className = "success";
            setTimeout(() => {
                typeAnswer.value="";
                feedbackMsg.textContent="";
            },3000)
        } else {
            feedbackMsg.textContent = "Try again";
            feedbackMsg.className = "error";
            setTimeout(() => {
              typeAnswer.value = "";
              feedbackMsg.textContent = "";
            }, 1000);
        }
    } catch(error) {
        console.error("Error checking the answer", error);
    }
});


nextBtn.addEventListener('click', () => {
        currentId++;
        typeAnswer.value = "";
        getData(currentId);
})