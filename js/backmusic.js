var x = document.getElementById("myAudio")


document.addEventListener("click", (event) => {
    /* the audio is now playable; play it if permissions allow */
    x.play();
    x.volume = 0.2;
});