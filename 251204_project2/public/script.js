const problemId = document.getElementById('problemId');
const problemStatement = document.getElementById("problemStatement");
const optionA = document.getElementById("option-a");
const optionB = document.getElementById("option-b");
const optionC = document.getElementById("option-c");
const optionD = document.getElementById("option-d");
const optionE = document.getElementById("option-e");
const checkBtn = document.getElementById('checkBtn');

console.log("Script connected");

async function fetchData() {
  try {
    const response = await fetch('/api/problems')
    if (!response.ok) {
        console.log("There seems to be the problem.", response.status);
    }
    const data = await response.json();
    problemId.textContent = `Problem ${data.id}`;
    problemStatement.textContent = `${data.statement}`;
    optionA.textContent = `${data.optionA}`;
    optionB.textContent = `${data.optionB}`;
    optionC.textContent = `${data.optionC}`;
    optionD.textContent = `${data.optionD}`;
    optionE.textContent = `${data.optionE}`;
  } catch(error) {
    console.error(error);
  }
};
fetchData();

checkBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('/api/problems');
    const data = await response.json();
    alert(`The correct answer is ${data.answer}`);
  } catch(err) {
    console.error(err);
  }
});
