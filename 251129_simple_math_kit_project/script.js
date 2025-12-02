const videoVimeo = document.querySelector(".videoParent");
const showBtn = document.getElementById("show-button");

function showSolution() {
    const videoURL =
        "https://player.vimeo.com/video/1137084032?h=98a4a79f9f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
    const iFrame = document.createElement("iframe");
    iFrame.setAttribute("src", videoURL);
    iFrame.classList.add("videoChild");
    videoVimeo.appendChild(iFrame);
    showBtn.setAttribute("disabled", "");
    showBtn.style.backgroundColor = "gray";
    showBtn.textContent = "Solution Posted";
}
