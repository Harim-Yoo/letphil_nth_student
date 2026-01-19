let playlist = [];

const songForm = document.getElementById("songForm");
const filterMood = document.getElementById("filterMood");
const shuffleBtn = document.getElementById("shuffleBtn");
const playlistContainer = document.getElementById("playlistContainer");
const titleInput = document.getElementById("titleInput");
const artistInput = document.getElementById("artistInput");
const linkInput = document.getElementById("linkInput");
const moodInput = document.getElementById("moodInput");
const toggleModeBtn = document.getElementById("toggleModeBtn");

const toggleChange = () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  if (isDark) {
    toggleModeBtn.textContent = "Dark Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleModeBtn.textContent = "Light Mode";
    localStorage.setItem("theme", "light");
  }
};

toggleModeBtn.addEventListener("click", toggleChange);

const savePlaylist = () => {
  const stringifyPlaylist = JSON.stringify(playlist);
  localStorage.setItem("playlist", stringifyPlaylist);
  return;
};

const addSong = () => {
  const newSong = {
    title: titleInput.value,
    artist: artistInput.value,
    link: linkInput.value,
    mood: moodInput.value,
  };
  if (!titleInput.value || !artistInput.value || !linkInput.value) {
    alert("Type all inputs.");
    return;
  }
  playlist.push(newSong);
  savePlaylist();
};

songForm.addEventListener("submit", addSong);

const loadPlaylist = () => {
  const savedData = localStorage.getItem("playlist");
  if (savedData) {
    const res = JSON.parse(savedData);
    playlist = res;
    return;
  } else {
    console.log("There is nothing to be fetched");
    return;
  }
};

const renderPlaylist = (songs) => {
  playlistContainer.innerHTML = "";
  songs.forEach((song, index) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("song-card");
    newDiv.innerHTML = `
            <strong>${song.title}</strong><br>
            <em>Artist:</em> ${song.artist}<br>
            <em>Mood:</em> ${song.mood}<br>
            <a href="${song.link}" target="_blank">🎧 Listen</a><br>
            <button class="delete-btn" data-index="${index}">🗑️ Delete</button>
        `;
    playlistContainer.appendChild(newDiv);
    return;
  })
  const DeltBtn = document.querySelectorAll(".delete-btn");
  DeltBtn.forEach((item) => {
    item.addEventListener("click", () => {
      const songIdx = item.getAttribute("data-index");
      playlist.splice(songIdx, 1);
      savePlaylist();
      renderPlaylist(playlist);
    });
  });
};

loadPlaylist();
renderPlaylist(playlist);
