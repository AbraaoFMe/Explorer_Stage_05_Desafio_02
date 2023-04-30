export default function ({
    controls,
    toggleSelected,
    togglePlay,
    songs
}) {

    const buttonsAndSongs = {
        forest: {
            button: controls.forest.button,
            song: songs.forest
        },

        rain: {
            button: controls.rain.button,
            song: songs.rain
        },

        shop: {
            button: controls.shop.button,
            song: songs.shop
        },

        fire: {
            button: controls.fire.button,
            song: songs.fire
        },
    }

    function toggle(selected) {
        toggleSelected(buttonsAndSongs[selected].button),
        togglePlay(buttonsAndSongs[selected].song)
    }

    return {
        toggle
    }
}