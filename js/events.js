export default function ({
    buttons,
    controls,
    timer,
    sounds
}) {
    buttons.play.addEventListener('click', () => {
        sounds.press()
        controls.play()
        timer.countDown()
    })

    buttons.pause.addEventListener('click', () => {
        sounds.press()
        controls.pause()
        timer.pause()
    })

    buttons.stop.addEventListener('click', () => {
        sounds.press()
        controls.stop()
        timer.stop()
    })

    buttons.set.addEventListener('click', () => {
        sounds.press()

        let newMinutes = controls.getMinutes()

        if (newMinutes) {
            timer.setTimer(newMinutes)
        }
    })

    buttons.sound_on.addEventListener('click', () => {
        sounds.press()

        controls.sound_on()

        sounds.bgAudio.pause()
    })

    buttons.sound_off.addEventListener('click', () => {
        sounds.press()

        controls.sound_off()

        sounds.bgAudio.play()
    })
}