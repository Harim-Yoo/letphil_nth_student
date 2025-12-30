const editor = document.getElementById("editor");
const clearBtn = document.getElementById("clearBtn");
const STORAGE_KEY = 'draft-content';

function loadData() {
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (rawData) {
        const res = JSON.parse(rawData);
        editor.value = res.content;
        return;
    }
}

function saveData(text) {
    const now = new Date().toLocaleTimeString(); 
    const dataObj = {
        content: text,
        lastSaved: now
    };
    const savedData = JSON.stringify(dataObj);
    return savedData;
}

let timer;

editor.addEventListener('input', (e) => {
    const texts = e.target.value;
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, saveData(texts));
        console.log("Saved");
    }, 1000);
})

clearBtn.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    editor.value = "";
})

loadData();