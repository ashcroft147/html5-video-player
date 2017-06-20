import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer';
import { VIDEO_JS_OPTIONS } from './Options';

class VideoContainer extends Component {
    render() {
        return (
            <div className="player-container">
                <VideoPlayer { ...VIDEO_JS_OPTIONS }/>
            </div>
        );
    }
}

export default VideoContainer