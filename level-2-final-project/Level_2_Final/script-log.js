/*Header Setup*/

const header = document.createElement("header");
const headerInfo = [
    {
        href:"./index.html",
        class:"homeTag",
        desc:"Go Home"
    },
    {
        href:"./logworkout.html",
        class:"logTag",
        desc:"Log Your Workout"
    },
    {
        href:"./showexercise.html",
        class:"learnTag",
        desc:"Learn New Exercise"
    }
]

const headerHTML = headerInfo
    .map((props)=>{
            return `
            <a href="${props.href}" class="${props.class}">
            ${props.desc}
            </a>
            `
        })
    .reduce((a,c)=> {return(a + c)}, "");

header.innerHTML = headerHTML;
document.body.prepend(header);

/*Body Setup*/

const logDiv = document.createElement("div");
logDiv.classList.add("logDiv");

/*Date Information*/

const dateDiv = document.createElement("div");
dateDiv.classList.add("dateDiv");

const dateLabel = document.createElement("label");
dateLabel.htmlFor = "dateInput";
dateLabel.textContent = "Date"
dateLabel.classList.add("dateLabel");

const dateInput = document.createElement("input");
dateInput.type = "date";
dateInput.classList.add("dateInput");
dateInput.id = "dateInput";
dateInput.required = true;

header.after(logDiv);
logDiv.appendChild(dateDiv);
dateDiv.appendChild(dateLabel);
dateDiv.appendChild(dateInput);

/*Type Information */

const typeDiv = document.createElement("div");
typeDiv.classList.add("typeDiv");

const typeLabel = document.createElement("label");
typeLabel.htmlFor = "type";
typeLabel.textContent = "Type";
typeLabel.classList.add("typeLabel");

logDiv.appendChild(typeDiv);
typeDiv.appendChild(typeLabel);

const checkBoxData = ["cardio", "leg", "chest", "back"];
const typeHTML = 
    checkBoxData
    .map((item)=>{
    return `
        <input type="checkbox" id="check-${item}" value="${item}"/>
        <label for="check-${item}" id="${item}">${item}</label>
        `
    })
    .reduce((a,c)=>{return(a+c)},"");

typeDiv.innerHTML += typeHTML;

/* Note Information */

const noteDiv = document.createElement("div");
noteDiv.classList.add("noteDiv");

const noteLabel = document.createElement("label");
noteLabel.htmlFor = "noteInput";
noteLabel.textContent = "Note";
noteLabel.classList.add("noteLabel");

const noteInput = document.createElement("input");
noteInput.type = "text";
noteInput.classList.add("noteInput");
noteInput.id = "noteInput";
noteInput.style.width = "250px";
noteInput.autocomplete = "off";

logDiv.append(noteDiv);
noteDiv.appendChild(noteLabel);
noteDiv.appendChild(noteInput);

/* Make Btn for saveData */

const btnDiv = document.createElement("div");
logDiv.appendChild(btnDiv);
btnDiv.classList.add("btnDiv");

const saveDataBtn = document.createElement("button");
saveDataBtn.id = "saveDataBtn";
saveDataBtn.textContent = "Save";
saveDataBtn.classList.add("saveDataBtn");
btnDiv.appendChild(saveDataBtn);

saveDataBtn.addEventListener('click', () => {
    showData.textContent = "";
    const gatheredData = {};
    const checked = document.querySelectorAll('input[type="checkbox"]');
    let checkedData = [];
    checked.forEach(item => {
        if (item.checked) {
            return checkedData.push(item.value)
        }
    })

    if (!dateInput.value || !noteInput.value || checkedData.length===0) {
            alert("Make sure you type all required data")
            return;
        }
    gatheredData.date = dateInput.value;
    gatheredData.type = checkedData;
    gatheredData.note = noteInput.value;
    
    console.log(gatheredData);
    const uniqueKey = `exercise_${gatheredData.date}_${Date.now()}` 
    localStorage.setItem(uniqueKey,JSON.stringify(gatheredData)
    );
    alert("Saved");
});

/* save and show */

const showData = document.createElement("div");
showData.classList.add("showData");
showData.id = "showData";
logDiv.appendChild(showData);

const showDataBtn = document.createElement("button");
showDataBtn.classList.add("showDataBtn");
showDataBtn.id = "showDataBtn";
showDataBtn.textContent = "Show"
btnDiv.appendChild(showDataBtn);

/* Fetch from LocalStorage */

// const deleteBtn = document.createElement("button");
// deleteBtn.classList.add("deleteBtn");
// deleteBtn.id = "deleteBtn";
// deleteBtn.textContent = "Delete";

showDataBtn.addEventListener("click", () => {
    let displayData = [];
    if (showData.innerHTML !== "") {
        return;
    } 


    for (i=0;i<localStorage.length;i++) {
        const currentKey = localStorage.key(i);
        if (!currentKey.includes("exercise")) {
            continue;
        }
        const response = localStorage.getItem(currentKey);
        const data = JSON.parse(response);
        displayData.push(data);
    }

    if (displayData.length === 0) {
        showData.textContent = "There is no stored data to show."
        return;
    }

    const showDataHTML = displayData.map(item=>{
        return `
        <ul class="workoutCard"> 
            <li><strong>Date:</strong> ${item.date}</li>
            <li><strong>Type:</strong> ${item.type}</li>
            <li><strong>Note:</strong> ${item.note}</li>
        </ul>
        `
    }).join("");
    showData.innerHTML = showDataHTML;
    

})




// saveData.addEventListener('click', () => {
//     const date = selectedDate.value;
//     if (!date) {
//         alert("Date must be selected");
//         return;
//     }

//     const dailyWorkout = [];
//     checkedData.forEach((item) => {
//         if (item.checked) {
//             dailyWorkout.push(item.value);
//         }
//     })

//     const hour = durationData.value;
//     if (!hour) {
//         alert("Duration time must be inserted");
//         return;
//     }

//     const finalData = { date: date, types: dailyWorkout, hour: Number(hour) }
//     localStorage.setItem(Date(date),JSON.stringify(finalData))
// })

// showData.addEventListener('click', () => {
    
//     if (localStorage.length === "0") {
//         return null
//     }
//     for (i=0; i<localStorage.length;i++){
//         const key = localStorage.key(i);
//         const data = localStorage.getItem(key);
//         const response = JSON.parse(data);
//         showResults.innerHTML = 
//         `
//         <div class="flex flex-row">
//             Date: ${response.date}, Types: ${response.types}, Hour: ${response.hour}
//         </div>
//         `
//     }
// })

// delData.addEventListener('click',()=>{
//     localStorage.clear();
// })

/*
**Tech:** HTML, CSS, JavaScript  
**Features:**  
✅ Log workouts (date, type, duration, notes)  
✅ Save and retrieve workouts from Local Storage  
✅ Fetch exercises from an API ([WGER Workout API](https://wger.de/en/software/api))  
✅ Filter workouts by type (Cardio, Strength, etc.)  
✅ Responsive layout with tabbed navigation
*/