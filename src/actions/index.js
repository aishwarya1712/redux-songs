
// Action creator. Should return an action.
// It should have a type property and can optionally have a payload property
export const selectSong = (song) => {
    return {
        type: "SONG_SELECTED",
        payload: song
    };
};
