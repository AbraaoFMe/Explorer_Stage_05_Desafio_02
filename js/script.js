import Elements from "./elements.js"
import TimerControls from "./timer-controls.js"
import SongControls from "./song-controls.js"
import SwitchControls from "./switch-controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Events from "./events.js"

const elements = Elements()

const timerControls = TimerControls({
    controls: elements.controls.timer,
    show: elements.show,
    hide: elements.hide
})

const timer = Timer({
    timeDisplay: elements.timeDisplay,
    resetButton: timerControls.stop
})

const sounds = Sounds({
    songControls: elements.controls.songs
})

const songControls = SongControls({
    controls: elements.controls.songs,
    select: elements.select,
    toggleSelected: elements.toggleSelected,
    togglePlay: sounds.togglePlay,
    songs: sounds.bgSongs
})

const switchControls = SwitchControls({
    buttons: elements.controls.switch,
    show: elements.show,
    hide: elements.hide
})

Events({
    buttons: elements.controls,
    controls: {
        timer: timerControls,
        song: songControls,
        switch: switchControls,
        app: elements.app
    },
    timer,
    sounds
})