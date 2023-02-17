window.addEventListener('keydown', function (e) {
    // console.log(e);  It will tell u to write e.keyCode after u look into console
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; // If a button not related to audio press

    audio.currentTime = 0;  // If u want that it again rewind on press audio manytime.
    audio.play();   // to play audio
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing'); // to add class playing of css

    function removeTransition(e) {
        // console.log(e);
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});
