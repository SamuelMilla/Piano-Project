const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.src= `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    

}

pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (E) => {
    playTune(E.key);
}


document.addEventListener("keydown", pressedKey);