import { combineReducers } from 'redux';
import * as Constant from '../util/constants';

const songsReducer = () => {
    return [
        { title: "Vando satguru charan ko", duration: 1.01 },
        { title: "Aavoji wala mara gher aavoji wala", duration: 2.02 },
        { title: "Raini ki unidi piya pase aaviya", duration: 3.03 },
        { title: "Utho re pyare piya naval vilasi", duration: 4.04 },
        { title: "Puran bharma bhram se nyare", duration: 5.05 }
    ];
};

const selectedSongReducer = (selectedSong = null, action = null) => {
    console.log("selectedSongReducer called");
    if (action.type === Constant.SONG_SELECTED) {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});