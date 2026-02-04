const music = document.getElementById("bgMusic");

// Resume time if it exists
const savedTime = localStorage.getItem("musicTime");
if (savedTime) {
    music.currentTime = parseFloat(savedTime);
}

// Play music after user interaction
document.addEventListener("click", () => {
    if (music.paused) {
        music.play();
    }
}, { once: true });

// Save time before leaving page
window.addEventListener("beforeunload", () => {
    localStorage.setItem("musicTime", music.currentTime);
});
