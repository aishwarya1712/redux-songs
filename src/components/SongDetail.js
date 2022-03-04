import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
    console.log("Song detail props: ", props)
    return (
        <div>
            {props.selectedSong ? 
            <div>
                <h3>Details for</h3>
                <div> Title: {props.selectedSong.title} </div>
                <div> Duration: {props.selectedSong.duration} </div>
            </div> : <h3>Select a song</h3>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {selectedSong: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);