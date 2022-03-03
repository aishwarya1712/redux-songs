import React, {Component} from "react";
import {connect} from "react-redux";
import {selectSong} from "../actions"

class SongList extends Component{
    
    renderedList() {
        console.log(this.props)
        return this.props.songs.map((song, key) => {
            return (
                <div className="item" key={key}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }
    render(){
        return <div className="ui divided list">
            {this.renderedList()}
        </div>
    }
}


// mapStateToProps is called with new state whenever state changes due to the reducers being called.
// by convention we call this function mapStateToProps, but it can be called anything
// called with all of the state in redux store i.e list of all songs and currently selected song
const mapStateToProps = (state) => {

    console.log(state);
    // return state; // --------> will return both list of all songs and selected song

    return {songs: state.songs} // since in SongList component we only need list of all songs, we don't need the selectedSong
}

// passing selectSong action creator also to connect
export default connect(mapStateToProps, {selectSong: selectSong})(SongList);