/* Header Setup */

import { Header, FetchDiv, FetchIntro, FetchBtn, FetchDisplay, Footer } from "./components.js";

new Header();

/* Fetching New Parts */

new FetchDiv("body","fetchDiv");
new FetchIntro(".fetchDiv","Learn Random Exercise");
const currDisplay = new FetchDisplay(".fetchDiv","","fetchDisplay");
new FetchBtn(".fetchDiv","Click & Fetch","fetchBtn", (input) => currDisplay.renderData(input) );


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