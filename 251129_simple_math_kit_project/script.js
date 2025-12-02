const problemText = document.getElementById("problem")
const problemActualText = problemText.textContent;
console.log(problemActualText);

const problems = [
    {
        "id":1,
        "problem":"This is the math problem"
    }
]

problems.forEach(problem=>{
    console.log(problem['problem']);
});


const problemNumber = document.getElementById('title');




function showSolution() {
            console.log("Hello");
        }

        function nextProblem() {
            console.log("Next");
        }