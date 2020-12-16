const musicToggle = document.getElementById('play');
const song = document.getElementById('song');
let playing = false;

musicToggle.addEventListener('click', toggleMusic );

function toggleMusic() {
    if ( playing ) {
        song.pause();
        musicToggle.innerText = 'Play Music';
    } else {
        song.play();
        musicToggle.innerText = 'Pause Music';
    }

    playing = ! playing;
}