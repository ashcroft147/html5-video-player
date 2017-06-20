import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default class VideoPlayer extends Component {
    componentDidMount() {
            // instantiate video.js
             this.player = videojs(this.videoNode, this.props, function onPlayerReady() {                
             console.log('onPlayerReady', this);            
        });

        if(this.player) {
            this.player.on('ended', () => {
                let src = [{"type": "video/mp4", "src": "https://www.paypalobjects.com/webstatic/mktg/videos/PayPal_AustinSMB_baseline.mp4"}];
                this.player.src(src);
                this.player.play();

            })
        }
    }

    // destroy player on unmount
    componentWillUnmount() {
            if (this.player) {

            this.player.dispose();
        }
    }   
    // 1st src: https://www.w3schools.com/html/mov_bbb.mp4
    // 2nd src: https://www.paypalobjects.com/webstatic/mktg/videos/PayPal_AustinSMB_baseline.mp4
    render() {
        return (
            <div data-vjs-player>
                <p> Video</p>
                <video ref={node => this.videoNode = node} className="video-js" controls >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
            </div>
        );
    }
};
