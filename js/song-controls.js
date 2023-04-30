export default function ({
    controls,
    toggleSelected,
    togglePlay,
    songs
}) {
    const buttonsAndSongs = {
        forest: {
            button: controls.forest,
            song: songs.forest
        },

        rain: {
            button: controls.rain,
            song: songs.rain
        },

        shop: {
            button: controls.shop,
            song: songs.shop
        },

        fire: {
            button: controls.fire,
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