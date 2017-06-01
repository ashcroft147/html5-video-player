import React, { Component } from 'react';
import Video from './Video';
import Control from './Controls';

class Player extends Component {
    render() {
        return (
            <div className="player-container">
                <Video />
                <Control />
            </div>
        );
    }
}

export default Player