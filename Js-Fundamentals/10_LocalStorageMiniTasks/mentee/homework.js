const quoteInput = document.getElementById("quoteInput");
const saveQuoteBtn = document.getElementById("saveQuoteBtn");
const clearQuoteBtn = document.getElementById("clearQuoteBtn");
const quoteDisplay = document.getElementById("quoteDisplay");

const data = localStorage.getItem("favoriteQuote");
if (data !== null) {
    quoteDisplay.textContent = data;
    quoteInput.value = data;
} else {
    quoteDisplay.textContent = "No quote saved yet.";
}

saveQuoteBtn.addEventListener("click", () => {
    const saveData = quoteInput.value;
    if (saveData.trim() === "") {
        quoteDisplay.textContent = "No quote saved yet.";
        return;
    }

    if (!Number.isNaN(Number(saveData))) {
        quoteInput.value = "";
        quoteDisplay.textContent = "Don't put numbers.";
        return;
    }
    localStorage.setItem("favoriteQuote", saveData);
    quoteDisplay.textContent = saveData;
})

clearQuoteBtn.addEventListener('click', () => {
    localStorage.removeItem("favoriteQuote")
    quoteInput.value = "";
    quoteDisplay.textContent = "No quote saved yet.";
    return;
})
