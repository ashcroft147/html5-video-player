import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import Chart from './Chart';

export default class VideoPlayer extends Component {
    
    constructor(props) {
        super(props);

        this.state = {           
            startTime: "",
            endTime: "",
            duration: ""
        };

        this.myFunction = this.myFunction.bind(this);
    }

    componentDidMount() {
        // instantiate video.js
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {      
            // player 객체가 정상적으로 생성된 경우 startTime, endTime, duration을 구해서 prop에 셋팅해 준다.
            console.log('Video Player is Ready', this);
        });

        if(this.player) {
            // timeupdate is executed when video running time is changed
/*            this.player.on('timeupdate', function() {
                console.log("time is setup");
            });*/
            this.player.on('loadedmetadata', function() {
                console.log("metadata is setup");
            });
        }
        
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
    
    myFunction() { 
        console.log('myFunction executed');
    } 

    // 1st src: https://www.w3schools.com/html/mov_bbb.mp4
    // 2nd src: https://www.paypalobjects.com/webstatic/mktg/videos/PayPal_AustinSMB_baseline.mp4
    render() {
        return (
            <div>
                <p> Video</p>
                <button onClick={this.myFunction} type="button">Get played range</button>
                <div data-vjs-player>
                    <video ref={node => this.videoNode = node} className="video-js" controls >
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    </video>
                </div>
                <Chart startTime={this.state.startTime} endTime={this.state.endTime} duration={this.state.duration}/>
            </div>
        );
    }
};
