let playlist = [];

const titleInput = document.getElementById("title")
const artistInput = document.getElementById("artist")
const linkInput = document.getElementById("link")
const moodInput = document.getElementById("mood")
const songForm = document.getElementById("songForm")
const playlistContainer = document.getElementById("playlist")
const filterMoodSelect = document.getElementById("filterMood")
const shuffleBtn = document.getElementById("shuffleBtn")
const toggleModeBtn = document.getElementById("toggleModeBtn")

const loadPlaylist = () => {
  const savedData = localStorage.getItem("customPlaylist")
  if (savedData) {
    const res = JSON.parse(savedData);
    playlist = res;
    console.log(playlist);
    return;
  } else {
    console.log("There is no playlist to be fetched")
    return;
  }
}

const savePlaylist = () => {
  const convertedPlaylist = JSON.stringify(playlist)
  localStorage.setItem("customPlaylist", convertedPlaylist)
  console.log(localStorage)
  return;
}

const renderPlaylist = (songsToRender) => {
  playlistContainer.innerHTML = ""
  songsToRender.forEach((song, index) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("song-card");
    newDiv.innerHTML = 
    `
      <strong>${song.title}</strong><br>
      <em>Artist:</em> ${song.artist}<br>
      <em>Mood:</em> ${song.mood}<br>
      <a href="${song.link}" target="_blank">🎧 Listen</a><br>
      <button class="delete-btn" data-index="${index}">🗑️ Delete</button>
    `;
    playlistContainer.append(newDiv);
    console.log(song);
    return;
  })

  const DeleteBtns = document.querySelectorAll('.delete-btn');
  DeleteBtns.forEach((item)=>{
    item.addEventListener('click', () => {
      const songIndex = item.getAttribute("data-index")
      console.log(playlist.splice(songIndex,1))
      playlist.splice(songIndex,1)
      savePlaylist()
      renderPlaylist(playlist)
      return;      
    })
  })
}

const addSong = (event) => {
  event.preventDefault();
  if (
    !titleInput.value ||
    !artistInput.value ||
    !moodInput.value ||
    !linkInput.value
  ) {
    alert("Put actual data");
    return;
  }
  const newObject = {
    title: titleInput.value,
    artist: artistInput.value,
    mood: moodInput.value,
    link: linkInput.value
  }
  
  playlist.push(newObject);
  savePlaylist();
  renderPlaylist(playlist);
  songForm.reset();
  console.log("New song added:", newObject);
  return;
}

const filterPlaylist = () => {
  const selectedValue = filterMoodSelect.value;
  if (selectedValue === "all") {
    renderPlaylist(playlist);
    return;
  } else {
    const filtered = playlist.filter(song => song.mood === selectedValue)
    renderPlaylist(filtered);
    return;
  }
}

const shufflePlaylist = () => {
  for (let i = playlist.length - 1; i>0 ; i--) {
    const j = Math.floor(Math.random()* (i+1));
    [playlist[i],playlist[j]] = [playlist[j],playlist[i]]
  }
  savePlaylist();
  renderPlaylist(playlist);
  console.log("The playlist is shuffled");
  return;
}

const toggleDarkMode = () => {
  document.body.classList.toggle("dark")
  const isDark = document.body.classList.contains("dark")
  if (isDark) {
    toggleModeBtn.textContent = "Light Mode"
    localStorage.setItem("theme","dark")
  } else {
    toggleModeBtn.textContent = "Dark Mode"
    localStorage.setItem("theme","light")
  }
  console.log("Dark mode toggled:", isDark)
}

const loadTheme = () => {
  const currentTheme = localStorage.getItem("theme")
  if (currentTheme === "dark") {
    document.body.classList.add("dark");
    toggleModeBtn.textContent = "Dark Mode";
    console.log("Dark Theme is loaded");
    return;
  } else {
    document.body.classList.add("light");
    toggleModeBtn.textContent = "Light Mode";
    console.log("Light Theme is loaded");
    return;
  }
}

songForm.addEventListener("submit", addSong)
filterMoodSelect.addEventListener("change", filterPlaylist)
shuffleBtn.addEventListener("click", shufflePlaylist)
toggleModeBtn.addEventListener("click", toggleDarkMode)

loadPlaylist();
renderPlaylist(playlist);
loadTheme();

