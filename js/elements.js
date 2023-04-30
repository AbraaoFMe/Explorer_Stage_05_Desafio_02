export default function () {
    const controls = {
        timer: {
            play: document.querySelector('.play'),
            pause: document.querySelector('.pause'),
            stop: document.querySelector('.stop'),
            set: document.querySelector('.set'),
            plus: document.querySelector('.plus'),
            less: document.querySelector('.less')
        },

        songs: {
            forest: document.querySelector('.forest'),
            rain: document.querySelector('.rain'),
            shop: document.querySelector('.shop'),
            fire: document.querySelector('.fire')
        }
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

    function toggleSelected(element) {
        element.classList.toggle('selected')
    }

    return {
        controls,
        timeDisplay,
        show,
        hide,
        toggleSelected
    }
}