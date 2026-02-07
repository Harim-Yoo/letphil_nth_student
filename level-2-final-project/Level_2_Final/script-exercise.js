/* Header Setup */

import { Header, Footer } from "./components.js";

new Header();

/* Fetching New Parts */

const fetchDiv = document.createElement("div");
fetchDiv.classList.add("fetchDiv");
document.body.append(fetchDiv);

const fetchIntro = document.createElement("h1");
fetchIntro.textContent = "Learn New Exercise".toUpperCase();
fetchDiv.appendChild(fetchIntro);

const fetchBtn = document.createElement("button");
fetchBtn.textContent = "Click & Fetch"
fetchBtn.classList.add("fetchBtn");
fetchDiv.appendChild(fetchBtn);

const fetchDisplay = document.createElement("div");
fetchDisplay.classList.add("fetchDisplay");
fetchDisplay.textContent = "";
fetchDiv.appendChild(fetchDisplay);

fetchBtn.addEventListener("click", async () => {
    try {
        const response = await fetch("https://wger.de/api/v2/exerciseinfo/", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type":"application/json"
            }
        });
        const data = await response.json();
        console.log(data.results);

    } catch(e) {
        throw e
    }
})

new Footer();
/*
**Tech:** HTML, CSS, JavaScript  
**Features:**  
✅ Log workouts (date, type, duration, notes)  
✅ Save and retrieve workouts from Local Storage  
✅ Fetch exercises from an API ([WGER Workout API](https://wger.de/en/software/api))  
✅ Filter workouts by type (Cardio, Strength, etc.)  
✅ Responsive layout with tabbed navigation
*/