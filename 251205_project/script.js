const problemId = document.getElementById('problemId');
const problemStatement = document.getElementById('problemStatement');
const checkBtn = document.getElementById('checkBtn');
const nextProblem = document.getElementById("nextProblem");
const problemContainer = document.getElementById('container');
const showProblem = document.getElementById('showProblem');
const answerDiv = document.getElementById('answerDiv');

let data = [] 

showProblem.addEventListener('click', async () => {
    try{
        problemContainer.style.display="block";
        const response = await fetch('/problems');
        data = await response.json();
        console.log(data);
        problemId.textContent = `Problem ${data[0].id}`;
        problemStatement.textContent = `Problem goes like this : '${data[0].statement}'`;
    } catch(error) {
        console.log("We have a problem", error);
    }
});

checkBtn.addEventListener('click', async () => {
    try{
        answerDiv.style.display="block";
        answerDiv.textContent = `Here is the answer: ${data[0].answer}`;
    } catch(err) {
        console.log("We have a problem", err);
    }
});

           