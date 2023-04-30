export default function () {
    const buttonPressAudio = new Audio('../assets/songs/audios_button-press.wav')
    const kitchenTimer = new Audio('../assets/songs/audios_kichen-timer.mp3')

    const bgSongs = {
        forest: new Audio('../assets/songs/Floresta.wav'),
        rain: new Audio('../assets/songs/Chuva.wav'),
        shop: new Audio('../assets/songs/Cafeteria.wav'),
        fire: new Audio('../assets/songs/Lareira.wav')
    }

    for(const song in bgSongs) {
        bgSongs[song].loop = true
    }

    function press() {
        buttonPressAudio.play()
    }

    function timerEnd() {
        kitchenTimer.play()
    }

    function togglePlay(song) {
        if(song.paused) {
            song.play()
        } else {
            song.pause()
        }
    }

    return {
        press,
        timerEnd,
        bgSongs,
        togglePlay
    }
}