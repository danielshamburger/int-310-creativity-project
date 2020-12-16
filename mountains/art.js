const timeOptions = document.querySelectorAll('.time-option');
const artboard = document.getElementById('artboard');

timeOptions.forEach( radio => radio.addEventListener('change', () => {
    console.log(radio.value)

    artboard.classList.remove('early-morning');
    artboard.classList.remove('late-morning');
    artboard.classList.remove('early-afternoon');
    artboard.classList.remove('late-afternoon');

    artboard.classList.add(radio.value);
}));

