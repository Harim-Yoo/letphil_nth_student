import { Header, Footer } from "./components.js";

new Header();

/*Body Setup*/

const logDiv = document.createElement("div");
logDiv.classList.add("logDiv");

/*Body Intro*/

const logIntro = document.createElement("h1");
logIntro.classList.add("logIntro");
logIntro.textContent = "Log Your Workout";
logDiv.appendChild(logIntro);

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

document.body.append(logDiv);
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
        .map((item) => {
            return `
        <input type="checkbox" id="check-${item}" value="${item}"/>
        <label for="check-${item}" id="${item}">${item.toUpperCase()}</label>
        `
        })
        .reduce((a, c) => { return (a + c) }, "");

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

    const gatheredData = {};
    const checked = document.querySelectorAll('input[type="checkbox"]');
    let checkedData = [];
    checked.forEach(item => {
        if (item.checked) {
            return checkedData.push(item.value)
        }
    })

    if (!dateInput.value || !noteInput.value || checkedData.length === 0) {
        alert("Make sure you type all required data")
        return;
    }
    gatheredData.date = dateInput.value;
    gatheredData.type = checkedData;
    gatheredData.note = noteInput.value;

    console.log(gatheredData);
    const uniqueKey = `exercise_${gatheredData.date}_${Date.now()}`
    localStorage.setItem(uniqueKey, JSON.stringify(gatheredData)
    );
    alert("Saved");
    dateInput.value = "";
    checked.forEach(i => i.checked = false);
    noteInput.value = "";
    showData.textContent = "";
});

/* save and show */

const showData = document.createElement("div");
showData.classList.add("showData");
logDiv.appendChild(showData);

const showDataBtn = document.createElement("button");
showDataBtn.classList.add("showDataBtn");
showDataBtn.id = "showDataBtn";
showDataBtn.textContent = "Show"
btnDiv.appendChild(showDataBtn);

const filterDataLabel = document.createElement("label");
filterDataLabel.htmlFor = "filterData";
filterDataLabel.textContent = "Filter by Types";
filterDataLabel.classList.add("filterDataLabel");

btnDiv.appendChild(filterDataLabel);

const filterData = document.createElement("select");
filterData.classList.add("filterData");
filterData.id = "filterData";
btnDiv.appendChild(filterData);

const optionHTML = ["all", ...checkBoxData].map(item => `<option value=${item}>${item}</option>`);
filterData.innerHTML = optionHTML;


/* Fetch from LocalStorage */
const renderChange = () => {
     const filterVal = filterData.value;
    let displayData = [];
    showData.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        const currentKey = localStorage.key(i);
        if (!currentKey.includes("exercise")) {
            continue;
        }
        const response = localStorage.getItem(currentKey);
        const data = JSON.parse(response);
        if (filterVal === "all" || data.type.includes(filterVal)) {
            displayData.push(data);
            const ul = document.createElement("ul");
            ul.classList.add("workoutCard");
            ul.innerHTML = `
            <li><span>Date:</span> ${data.date}</li>
            <li><span>Type:</span> ${data.type}</li>
            <li><span>Note:</span> ${data.note}</li>
        `

            const delBtn = document.createElement("button");
            delBtn.classList.add("delBtn");
            delBtn.textContent = "DELETE";

            delBtn.addEventListener("click", () => {
                localStorage.removeItem(currentKey);
                ul.remove();
            });

            ul.appendChild(delBtn);
            showData.appendChild(ul);
        }
    }

    if (displayData.length === 0) {
        const message = "Either there is no data to show, or there is a type mismatch."
        showData.innerHTML = `<p style="color:white">${message}</p>`;
    }

}

showDataBtn.addEventListener("click", renderChange);
filterData.addEventListener("change", renderChange);

new Footer;
