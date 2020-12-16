var timeOptions = document.querySelectorAll('.time-option');

timeOptions.forEach( radio => radio.addEventListener('change', () => console.log(radio.value) ));