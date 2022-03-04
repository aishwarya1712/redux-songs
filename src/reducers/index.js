import { combineReducers } from "redux";

// 1st reducer returns a static list of songs
// we're not taking any arguments because this is returning static list of songs
const songsReducer = () => {
    return [
        {title: 'No Scrubs',duration: '4:05'},
        {title: 'Macarena',duration: '2:30'},
        {title: 'All Star',duration: '3:15'},
        {title: 'I Want it That Way',duration: '1:45'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SONG_SELECTED"){
        return action.payload;
    } 
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer, // the key provided here will appear as the state variable used in other components
    selectedSong: selectedSongReducer
})