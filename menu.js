// Function to toggle mute/unmute
function toggleMute() {
    var music = document.getElementById('background-music');
    var muteButton = document.querySelector('.mute-button');

    if (music.muted) {
        music.muted = false;
        muteButton.classList.remove('muted');
    } else {
        music.muted = true;
        muteButton.classList.add('muted');
    }
}
