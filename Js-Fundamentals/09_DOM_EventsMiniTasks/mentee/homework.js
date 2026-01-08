// DOM + EVENTS HOMEWORK – LIVE PROFILE CARD
// -------------------------------------------------------
// GOAL: Update the profile card in real time based on inputs, and reset it.

// STEP 1: Select and store the following elements in variables:
//         - The name display heading (id "profileNameDisplay")
//         - The mood line (id "profileMoodDisplay")
//         - The favorite color line span (id "colorValueText")
//         - The name input (id "nameInput")
//         - The color input (id "colorInput")
//         - The mood select (id "moodSelect")
//         - The reset button (id "resetProfileBtn")

const profileNameDisplay = document.getElementById('profileNameDisplay');
const profileMoodDisplay = document.getElementById('profileMoodDisplay');
const colorValueText = document.getElementById('colorValueText');
const nameInput = document.getElementById('nameInput');
const moodSelect = document.getElementById('moodSelect');
const resetProfileBtn = document.getElementById('resetProfileBtn');

nameInput.addEventListener('input',()=>{
    const inputVal = nameInput.value;
    inputVal.trim() === "" ? profileNameDisplay.textContent = "Your Name" : profileNameDisplay.textContent = inputVal;
})

colorInput.addEventListener('input',()=>{
    const inputVal = colorInput.value;
    inputVal.trim() === "" ? colorValueText.textContent = "none yet" : colorValueText.textContent = inputVal
    colorValueText.style.color = inputVal; // I did it for extra fun. This is great.
});


// STEP 4: Add a "change" event listener to the mood select.
//         Inside the listener:
//         - Read the selected value.
//         - Update the mood line text to say, for example:
//           "Current mood: happy" (using the selected value).

// STEP 5: Add a "click" event listener to the reset button.
//         Inside the listener:
//         - Clear the name and color inputs (set value to empty string).
//         - Set the select back to "neutral".
//         - Reset the display name to "Your Name".
//         - Reset the favorite color text to "none yet".
//         - Reset the mood line text to "Current mood: neutral".
