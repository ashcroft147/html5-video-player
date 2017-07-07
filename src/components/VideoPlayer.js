import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default class VideoPlayer extends Component {
    
    constructor(props) {
        super(props);

        this.state = {player: ''};
    }

    componentDidMount() {
             // instantiate video.js
             this.player = videojs(this.videoNode, this.props, function onPlayerReady() {      
             this.setState({player: this.player});                       
        });

        /*
        if(this.player) {
            this.player.on('ended', () => {
                let src = [{"type": "video/mp4", "src": "https://www.paypalobjects.com/webstatic/mktg/videos/PayPal_AustinSMB_baseline.mp4"}];
                this.player.src(src);
                this.player.play();

            })
        }
        */
    }
    
    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }
    
    myFunction() { 
        console.log('1');
    } 

    // 1st src: https://www.w3schools.com/html/mov_bbb.mp4
    // 2nd src: https://www.paypalobjects.com/webstatic/mktg/videos/PayPal_AustinSMB_baseline.mp4
    render() {
        return (
            <div>
                <p> Video</p>
                <button onClick={this.myFunction.bind(this)} type="button">Get played range</button>
                <div data-vjs-player>
                    <video ref={node => this.videoNode = node} className="video-js" controls >
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    </video>

                </div>
            </div>
        );
    }
};
