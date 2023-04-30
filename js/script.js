import Elements from "./elements.js"
import TimerControls from "./timer-controls.js"
import SongControls from "./song-controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Events from "./events.js"

const elements = Elements()

const timerControls = TimerControls({
    controls: elements.controls.timer,
    show: elements.show,
    hide: elements.hide
})

const timer = Timer(elements.timeDisplay)

const sounds = Sounds()

const songControls = SongControls({
    controls: elements.controls.songs,
    select: elements.select,
    toggleSelected: elements.toggleSelected,
    togglePlay: sounds.togglePlay,
    songs: sounds.bgSongs
})

Events({
    buttons: elements.controls,
    controls: {
        timer: timerControls,
        song: songControls
    },
    timer,
    sounds
})