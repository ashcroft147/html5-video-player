import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default class VideoPlayer extends Component {
    componentDidMount() {
            // instantiate video.js
             this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
             console.log('onPlayerReady', this);
        });
    }

    // destroy player on unmount
    componentWillUnmount() {
            if (this.player) {
            this.player.dispose();
        }
    }    
    render() {
        return (
            <div data-vjs-player>
                <p> Video</p>
                <video ref={node => this.videoNode = node} width="640" height="360" className="video-js" poster="media/poster_PayPal_Austin2.jpg" controls>
                    <source src="https://www.paypalobjects.com/webstatic/mktg/videos/PayPal_AustinSMB_baseline.mp4" type="video/mp4" />
                </video>
            </div>
        );
    }
};
