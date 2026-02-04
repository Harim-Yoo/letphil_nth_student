const showData = document.getElementById("showData");
const saveData = document.getElementById("saveData");
const delData = document.getElementById("delData");

const selectedDate = document.getElementById("selectedDate");

const checkedData = document.querySelectorAll('input[type="checkbox"]');
const durationData = document.getElementById("durationData");
const showResults = document.getElementById("showResults");

saveData.addEventListener('click', () => {
    const date = selectedDate.value;
    if (!date) {
        alert("Date must be selected");
        return;
    }

    const dailyWorkout = [];
    checkedData.forEach((item) => {
        if (item.checked) {
            dailyWorkout.push(item.value);
        }
    })

    const hour = durationData.value;
    if (!hour) {
        alert("Duration time must be inserted");
        return;
    }

    const finalData = { date: date, types: dailyWorkout, hour: Number(hour) }
    localStorage.setItem(Date(date),JSON.stringify(finalData))
})

showData.addEventListener('click', () => {
    
    if (localStorage.length === "0") {
        return null
    }
    for (i=0; i<localStorage.length;i++){
        const key = localStorage.key(i);
        const data = localStorage.getItem(key);
        const response = JSON.parse(data);
        showResults.innerHTML = 
        `
        <div class="flex flex-row">
            Date: ${response.date}, Types: ${response.types}, Hour: ${response.hour}
        </div>
        `
    }
})

delData.addEventListener('click',()=>{
    localStorage.clear();
})

/*
**Tech:** HTML, CSS, JavaScript  
**Features:**  
✅ Log workouts (date, type, duration, notes)  
✅ Save and retrieve workouts from Local Storage  
✅ Fetch exercises from an API ([WGER Workout API](https://wger.de/en/software/api))  
✅ Filter workouts by type (Cardio, Strength, etc.)  
✅ Responsive layout with tabbed navigation
*/