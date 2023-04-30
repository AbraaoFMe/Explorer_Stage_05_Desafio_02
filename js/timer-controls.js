export default function ({
    controls,
    show,
    hide
}) {
    function play() {
        hide(controls.play)
        show(controls.pause)

        show(controls.stop)
        hide(controls.set)
    }

    function pause() {
        show(controls.play)
        hide(controls.pause)
    }

    function stop() {
        show(controls.play)
        hide(controls.pause)

        hide(controls.stop)
        show(controls.set)
    }

    function getMinutes() {
        let newMinutes = prompt("Quantos minutos?")
        let isNotValid = (!newMinutes || isNaN(newMinutes) || Number(newMinutes) <= 0)

        if (isNotValid) {
            alert('Erro: Número inválido')
            return false
        }

        return newMinutes
    }

    return {
        play,
        pause,
        stop,
        getMinutes
    }
}