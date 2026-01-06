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

// STEP 2: Add an "input" event listener to the name input.
//         Inside the listener:
//         - Read the current input value.
//         - If it's empty, set the display name to "Your Name".
//         - Otherwise, set the display name to the typed value.

// STEP 3: Add an "input" event listener to the color input.
//         Inside the listener:
//         - Read the current input value.
//         - If it's empty, set the color text to "none yet".
//         - Otherwise, set the color text to the typed value.
//         (Optional) You can later also change the text color itself,
//         but for now just update the text.

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
