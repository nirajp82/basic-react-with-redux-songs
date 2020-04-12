import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList = () => {
        return this.props.songs.map((song) => {
            return (
                <div key={song.title} className="item">
                    <div className="content">
                        {song.title}
                    </div>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => {
                            console.log("button Clicked");
                            this.props.selectSong(song);
                        }}>
                            Select
                        </button>
                    </div>
                </div>);
        });
    }
    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    console.log("SongList: mapStateToProps");
    return { songs: state.songs };
};

const mapDispatchToProps = {    
    selectSong: selectSong
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);