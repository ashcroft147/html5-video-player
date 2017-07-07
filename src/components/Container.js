import React, { Component } from 'react';
import { VIDEO_JS_OPTIONS } from './Options';
import VideoPlayer from './VideoPlayer';
import BasicChart from './BasicChart';

class VideoContainer extends Component {
    render() {
        return (
            <div className="player-container">
                <VideoPlayer { ...VIDEO_JS_OPTIONS }/>
                {/*
                    <BasicChart />
                */}
                
            </div>
        );
    }
}

export default VideoContainer