import React, { Component } from 'react';
import { VIDEO_JS_OPTIONS } from './Options';
import VideoPlayer from './VideoPlayer';

class Container extends Component {
    render() {
        return (
            <div className="player-container">
                <VideoPlayer { ...VIDEO_JS_OPTIONS }/>
            </div>
        );
    }
}

export default Container