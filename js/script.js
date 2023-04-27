import Elements from "./elements.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Events from "./events.js"

const elements = Elements()

const controls = Controls({
    controls: elements.controls,
    show: elements.show,
    hide: elements.hide
})

const timer = Timer(elements.timeDisplay)

const sounds = Sounds()

Events({
    buttons: elements.controls,
    controls,
    timer,
    sounds
})