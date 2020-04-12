import * as constants from '../util/constants';
export const selectSong = (song) => {
    console.log("selectSong Action Creator Called");
    return {
        type: constants.SONG_SELECTED,
        payload: song
    };
}