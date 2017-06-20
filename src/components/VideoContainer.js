import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer';
import Control from './Controls';
import { VIDEO_JS_OPTIONS } from './Options';

class Player extends Component {
    render() {
        return (
            <div className="player-container">
                <VideoPlayer { ...VIDEO_JS_OPTIONS }/>
            </div>
        );
    }
}

export default Player