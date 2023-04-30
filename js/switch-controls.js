export default function({
    buttons,
    show,
    hide
}) {
    function dark() {
        hide(buttons.light)
        show(buttons.dark)
    }

    function light() {
        show(buttons.light)
        hide(buttons.dark)
    }

    return {
        dark,
        light
    }
}