let currentIndex = 0;
let questions = [];
let selectedGuess = null;
let userRecord = {
    name: "",
    correctCount: null,
    wrongCategories: []
};

const screenLogin = document.getElementById("screenLogin");
const screenQuiz = document.getElementById("screenQuiz");
const screenResult = document.getElementById("screenResult");
const nextBtn = document.getElementById("nextBtn");
const dataShow = document.getElementById("dataShow");
const idShow = document.getElementById("idShow");
const submitBtn = document.getElementById("submitBtn");
const optionsContainer = document.getElementById("optionsContainer");
const startBtn = document.getElementById("startBtn");
const inputName = document.getElementById("inputName");
const passFailMsg = document.getElementById("passFailMsg");
const scoreDetail = document.getElementById("scoreDetail");
const wrongList = document.getElementById("wrongList");
const restartBtn = document.getElementById("restartBtn");

function screenShow(screen) {

    screenLogin.classList.add('hidden');
    screenQuiz.classList.add('hidden');
    screenResult.classList.add('hidden');

    if (screen === "login") {
        screenLogin.classList.remove('hidden');
    }
    if (screen === "quiz") {
        screenQuiz.classList.remove('hidden');
    }
    if (screen === "result") {
        screenResult.classList.remove('hidden');
    }
}

async function init() {
    try {
        questions = await fetch("/test").then((res) => res.json());
    } catch (err) {
        console.error(err.message);
    }
}
screenShow("login");
init();

inputName.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        startBtn.click();
    }
});

startBtn.addEventListener('click', () => {
    if (!inputName.value) { return alert("Type your name"); }
    userRecord.name = inputName.value;
    userRecord.correctCount = 0;
    userRecord.wrongCategories = [];
    currentIndex = 0;
    loadQuestion();
    screenShow("quiz");
});

function loadQuestion() {
    selectedGuess = null;
    submitBtn.style.display = "block";
    nextBtn.style.display = "none";
  
    const problem = questions[currentIndex];
    idShow.innerHTML = `Problem ${problem.id}.`;
    dataShow.innerHTML = problem.text;
    optionsContainer.innerHTML = problem["options"]
        .map((item) => `<button> ${item} </button>`)
        .join(" ");
}

optionsContainer.addEventListener('click', async (event) => {
    if (submitBtn.style.display === "none") return;
    if (event.target.tagName !== "BUTTON") return;

    const allButtons = optionsContainer.querySelectorAll("button");
    allButtons.forEach(btn => {
        btn.classList.remove('selected');
        btn.style.backgroundColor = "";
    });

    event.target.classList.add("selected");
    event.target.style.backgroundColor = "gray";
    selectedGuess = event.target.innerText.trim();

})

submitBtn.addEventListener("click", async () => {
    if (!selectedGuess) { return alert("Please select an answer") };

    const allButtons = optionsContainer.querySelectorAll("button");
    allButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove("selected");
        btn.style.backgroundColor = "";
    });

    const problem = questions[currentIndex];
    let data = { id: problem.id, guess: selectedGuess };

    try {
        const response = await fetch("/check", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error(response.statusText);
        const resultData = await response.json();

        if (resultData.correct) {
            userRecord.correctCount += 1;

        } else {
            userRecord.wrongCategories.push({
                domain: problem.domain,
                subdomain: problem.subdomain
            });
        }

        submitBtn.style.display = "none";
        nextBtn.style.display = "block";
        nextBtn.style.backgroundColor = "black";
        nextBtn.style.color = "white";

    } catch (error) {
        console.error(error.message);
    }
});

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= questions.length) {
        showResult();
    } else {
        loadQuestion();
    }
});

function showResult() {
    screenShow("result");
    const total = questions.length;
    const score = userRecord.correctCount;
    const percentage = (score / total) * 100;

    if (percentage >= 60) {
        passFailMsg.innerHTML = `<strong>${userRecord.name}</strong>! Your tentative score is between 600 and 800.`
    } else {
        passFailMsg.innerHTML = `<strong>${userRecord.name}</strong>! Your tentative score is less than 600.`
    }

    scoreDetail.innerHTML = `Score: ${score} / ${total} (${percentage}%)`;

    if (userRecord.wrongCategories.length > 0) {
        wrongList.innerHTML = "<strong>Weak Areas:</strong><br>" +
            userRecord.wrongCategories.map((item) => {
                const subText = item.subdomain ? item.subdomain : "";
                return `<li>***${item.domain}***, specifically **${subText}**</li>`
            }).join(" ");
    } else {
        wrongList.innerHTML = "<strong>Perfect Scores. No weak area </strong>";
    }
}

restartBtn.addEventListener('click', () => {
    screenShow("login");
    inputName.value = "";
});



