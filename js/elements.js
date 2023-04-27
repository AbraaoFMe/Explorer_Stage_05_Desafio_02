export default function () {
    const controls = {
        play: document.querySelector('.play'),
        pause: document.querySelector('.pause'),
        stop: document.querySelector('.stop'),
        set: document.querySelector('.set'),
        sound_on: document.querySelector('.sound-on'),
        sound_off: document.querySelector('.sound-off')
    }

    const timeDisplay = {
        minutes: document.querySelector('.minutes-display'),
        seconds: document.querySelector('.seconds-display')
    }

    function show(element) {
        element.classList.remove('hide')
    }

    function hide(element) {
        element.classList.add('hide')
    }

    return {
        controls,
        timeDisplay,
        show,
        hide
    }
}