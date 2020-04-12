import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
    render() {
        console.log("SongDetail: Render()");
        if (!this.props.song) {
            return <div></div>;
        }
        return (
            <div>
                <h3>Details for</h3>
                <p>
                    Title: {this.props.song.title}
                    <br/>
                    Duration: {this.props.song.duration}
                </p>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    console.log("SongDetail: mapStateToProps");
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);