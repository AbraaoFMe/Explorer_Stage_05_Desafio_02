import Sounds from "./sounds.js"

export default function (timeDisplay) {
    let minutes = localStorage.getItem("timer-minutes") || 25

    const countTime = {
        minutes,
        seconds: 0
    }

    updateDisplay()

    let timerTimeOut

    function setTimer(newMinutes) {
        minutes = Number(newMinutes)
        localStorage.setItem('timer-minutes', minutes)

        countTime.minutes = minutes
        updateDisplay()
    }

    function updateDisplay() {
        timeDisplay.minutes.textContent = String(countTime.minutes).padStart(2, '0')
        timeDisplay.seconds.textContent = String(countTime.seconds).padStart(2, '0')
    }

    function countDown() {
        timerTimeOut = setTimeout(() => {

            if (countTime.seconds <= 0) {
                if (countTime.minutes <= 0) {
                    Sounds().timerEnd()
                    return
                }

                --countTime.minutes
                countTime.seconds = 5
            }

            --countTime.seconds

            updateDisplay()

            countDown()
        }, 1000)
    }

    function reset() {
        countTime.minutes = minutes
        countTime.seconds = 0
        updateDisplay()
    }

    function stop() {
        clearTimeout(timerTimeOut)
        reset()
    }

    function pause() {
        clearTimeout(timerTimeOut)
    }

    return {
        setTimer,
        countDown,
        stop,
        pause
    }
}