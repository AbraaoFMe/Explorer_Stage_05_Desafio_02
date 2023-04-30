export default function ({
    buttons,
    controls,
    timer,
    sounds
}) {
    // Timer
    buttons.timer.play.addEventListener('click', () => {
        sounds.press()
        controls.timer.play()
        timer.countDown()
    })

    buttons.timer.pause.addEventListener('click', () => {
        sounds.press()
        controls.timer.pause()
        timer.pause()
    })

    buttons.timer.stop.addEventListener('click', () => {
        sounds.press()
        controls.timer.stop()
        timer.stop()
    })

    buttons.timer.set.addEventListener('click', () => {
        sounds.press()

        let newMinutes = controls.timer.getMinutes()

        if (newMinutes) {
            timer.setTimer(newMinutes)
        }
    })

    buttons.timer.plus.addEventListener('click', () => {
        timer.plus()
    })

    buttons.timer.less.addEventListener('click', () => {
        timer.less()
    })


    // Songs
    for(const songOption in buttons.songs) {
        buttons.songs[songOption].addEventListener('click', () => {
            controls.song.toggle(songOption)
        })
    }
}