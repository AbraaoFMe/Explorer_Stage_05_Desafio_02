export default function () {
    const root = document.documentElement

    const app = {
        dark: setDarkModeOn,
        light: setDarkModeOff
    }

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
            forest: {
                button: document.querySelector('.forest'),
                volume: document.querySelector('.forest .volume')
            },
            rain: {
                button: document.querySelector('.rain'),
                volume: document.querySelector('.rain .volume')
            },
            shop: {
                button: document.querySelector('.shop'),
                volume: document.querySelector('.shop .volume')
            },
            fire: {
                button: document.querySelector('.fire'),
                volume: document.querySelector('.fire .volume')
            }
        },

        switch: {
            dark: document.querySelector('.dark'),
            light: document.querySelector('.light')
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

    function setDarkModeOn() {
        root.classList.add('dark-mode')
    }

    function setDarkModeOff() {
        root.classList.remove('dark-mode')
    }

    return {
        controls,
        app,
        timeDisplay,
        show,
        hide,
        toggleSelected,
    }
}