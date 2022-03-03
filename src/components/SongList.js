import React, {Component} from "react";
import {connect} from "react-redux";

class SongList extends Component{
    renderedList() {
        return this.props.songs.map((song, key) => {
            return (
                <div className="item" key={key}>
                    <div className="right floated content">
                        <button className="ui button primary">Select</button>
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


// by convention we call this function mapStateToProps, but it can be called anything
// called with all of the state in redux store i.e list of all songs and currently selected song
const mapStateToProps = (state) => {

    // console.log(state);
    // return state; // --------> will return both list of all songs and selected song

    return {songs: state.songs} // since in SongList component we only need list of all songs, we don't need the selectedSong
}

export default connect(mapStateToProps)(SongList);