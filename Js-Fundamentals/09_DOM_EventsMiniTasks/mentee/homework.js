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

moodSelect.addEventListener('change', (e)=>{
    const moodVal = e.target.value;
    profileMoodDisplay.textContent = `Current mood: ${moodVal}`;
})

resetProfileBtn.addEventListener('click', () => {
    nameInput.value = "";
    colorInput.value = "";
    moodSelect.value = "neutral";
    profileNameDisplay.textContent = "Your Name";
    colorValueText.textContent = "none yet";
    profileMoodDisplay.textContent = "Current mood: neutral";
})
