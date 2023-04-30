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
        sounds.press()
        timer.plus()
    })

    buttons.timer.less.addEventListener('click', () => {
        sounds.press()
        timer.less()
    })


    // Songs
    for (const songOption in buttons.songs) {
        buttons.songs[songOption].button.addEventListener('click', () => {
            sounds.press()
            controls.song.toggle(songOption)
        })

        buttons.songs[songOption].volume.addEventListener('click', e => {
            e.stopPropagation()
            sounds.bgSongs[songOption].volume = e.currentTarget.value / 100
        })
    }

    // Dark-Mode-Switch
    buttons.switch.dark.addEventListener('click', () => {
        sounds.press()
        controls.switch.light()
        controls.app.light()
    })

    buttons.switch.light.addEventListener('click', () => {
        sounds.press()
        controls.switch.dark()
        controls.app.dark()
    })
}