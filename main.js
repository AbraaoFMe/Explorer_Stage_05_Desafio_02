const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')

const btnSoundOn = document.querySelector('.sound-on')
const btnSoundOff = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes-display')
const secondsDisplay = document.querySelector('.seconds-display')

let minutes = localStorage.getItem("timer-minutes") || 25

const countTime = {
    minutes,
    seconds: 00
}

let timerTimeOut

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

bgAudio.loop = true

updateDisplay()

btnPlay.addEventListener('click', () => {
    buttonPressAudio.play()

    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')

    btnStop.classList.remove('hide')
    btnSet.classList.add('hide')

    countDown()
})

btnPause.addEventListener('click', () => {
    buttonPressAudio.play()

    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')

    clearTimeout(timerTimeOut)
})

btnStop.addEventListener('click', () => {
    buttonPressAudio.play()
    kitchenTimer.pause()

    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')

    btnStop.classList.add('hide')
    btnSet.classList.remove('hide')

    clearTimeout(timerTimeOut)
    countTime.minutes = minutes
    countTime.seconds = 0
    updateDisplay()
})

btnSet.addEventListener('click', () => {
    buttonPressAudio.play()

    let newMinutes = prompt("Quantos minutos?")
    let isNotValid = (!newMinutes || isNaN(newMinutes) || Number(newMinutes) <= 0)

    if (isNotValid) {
        alert('Erro: Número inválido')
        return
    }

    minutes = Number(newMinutes)
    localStorage.setItem('timer-minutes', minutes)

    countTime.minutes = minutes
    updateDisplay()
})

btnSoundOn.addEventListener('click', () => {
    buttonPressAudio.play()

    btnSoundOn.classList.add('hide')
    btnSoundOff.classList.remove('hide')

    bgAudio.pause()
})

btnSoundOff.addEventListener('click', () => {
    buttonPressAudio.play()

    btnSoundOn.classList.remove('hide')
    btnSoundOff.classList.add('hide')

    bgAudio.play()
})

function updateDisplay() {
    minutesDisplay.textContent = String(countTime.minutes).padStart(2, '0')
    secondsDisplay.textContent = String(countTime.seconds).padStart(2, '0')
}

function countDown() {
    timerTimeOut = setTimeout(() => {
        
        if (countTime.seconds <= 0) {
            if (countTime.minutes <= 0) {
                bgAudio.pause()
                kitchenTimer.play()
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