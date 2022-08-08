const text = document.querySelector(".text");
const textH = document.querySelector(".text h");
const texts = [
    "Namaste! 🙏",
    "India is a country with diverse culture and rich cultural heritage.",
    "Lets celebrate our 75th Independence Day",
    "with happiness, and joy!",
    "Website Made By: Mafee7",
    "Click anywhere on the page to play our national song, Vande Mataram!"
];

const player = new Audio();
player.src = "Vande Mataram.mp3";
let nationalSongPlayer = () => {
    console.trace()
    textH.textContent = "Click to Play!";
    window.addEventListener("click", () => {
        player.play();
        textH.textContent = "JAI HIND!";
    });
};

let afterWave = () => {
    flagOrange.parentElement.style.setProperty("animation", "fade-out 1s forwards");
    setTimeout(() => {
        flagOrange.parentElement.style.setProperty("display", "none");
        let textIndex = 0;
        let songPlayerTriggered = false;
        textH.textContent = texts[0];
        setInterval(() => {
            if(!songPlayerTriggered) {
                if(texts[textIndex]) {
                    if(textIndex > 0) textH.style.filter = `drop-shadow(0 0 2vh var(--flag-orange))`
                    if(textIndex > 1) textH.style.filter = `drop-shadow(0 0 2vh var(--flag-white))`
                    if(textIndex > 3) textH.style.filter = `drop-shadow(0 0 2vh var(--flag-green))`
                    textH.textContent = texts[textIndex];
                    textIndex++
                } else {
                    if(!songPlayerTriggered) {
                        songPlayerTriggered = true;
                        nationalSongPlayer();
                    }
                }
            }
        }, 3000);
    }, 1000);
};

const flagOrange = document.querySelector(".flag .orange");
const flagWhite = document.querySelector(".flag .white");
const flagGreen = document.querySelector(".flag .green");

let wavePos = 0;
let waveOffset = 15;
let loop = () => {
    if(!loop.disabled) {
        if(wavePos < 140) {
            let flOrngWavePos = wavePos;
            flagOrange.style.background = 
            `linear-gradient(115deg, var(--flag-orange) ${flOrngWavePos - waveOffset}%, rgba(194, 118, 20, 1) ${flOrngWavePos}%, var(--flag-orange) ${flOrngWavePos + waveOffset}%)`;
            
            let flWhiteWavePos = wavePos - 8;
            flagWhite.style.background = 
            `linear-gradient(115deg, var(--flag-white) ${flWhiteWavePos - waveOffset}%, rgb(162, 162, 162) ${flWhiteWavePos}%, var(--flag-white) ${flWhiteWavePos + waveOffset}%)`;
            
            let flGreenWavePos = wavePos - 18;
            flagGreen.style.background = 
            `linear-gradient(115deg, var(--flag-green) ${flGreenWavePos - waveOffset}%, rgb(0, 129, 62) ${flGreenWavePos}%, var(--flag-green) ${flGreenWavePos + waveOffset}%)`;

            wavePos++;
        } else {
            loop.disabled = true;
            afterWave();
        }
    }
};

setInterval(loop, 35);