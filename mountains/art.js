const timeOptions = document.querySelectorAll('.time-option');
const artboard = document.getElementById('artboard');

const nightToggle = document.getElementById('night-toggle');
let nightTime = false;


timeOptions.forEach( radio => radio.addEventListener('change', () => {
    console.log(radio.value);

    artboard.classList.remove('early-morning');
    artboard.classList.remove('late-morning');
    artboard.classList.remove('early-afternoon');
    artboard.classList.remove('late-afternoon');

    artboard.classList.add(radio.value);
}));

nightToggle.addEventListener( 'click', () => {
    nightTime = !nightTime;

    if ( nightTime ) {
        nightToggle.classList.add('night');
        artboard.classList.add('night');
    } else {
        nightToggle.classList.remove('night');
        artboard.classList.remove('night');
    }
} );