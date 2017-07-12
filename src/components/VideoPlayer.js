import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import Chart from './Chart';

export default class VideoPlayer extends Component {
    
    constructor(props) {
        super(props);

        this.state = {                   
            startTime: null,
            endTime: null,
            duration: null
        };

        // binding local function
         this.setChartProps = this.setChartProps.bind(this);
    }
   
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + ", " + JSON.stringify(nextState));

        if(this.state.startTime !== nextState.startTime)
        {
            return true;
        }
    }

    componentDidMount() {
        // instantiate video.js
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {      
            console.log('Video Player is Ready', this);
        });

        if(this.player) {
            let self = this;
            this.player.on('loadedmetadata', function() {
                self.setChartProps(this);
            });

            // timeupdate is executed when video running time is changed
            /*            
            this.player.on('timeupdate', function() {
                console.log("time is setup");
            });
            */   
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
    }

    setChartProps(player) {
          this.setState({
            startTime: player.currentTime(),
            endTime: player.remainingTime(),
            duration: player.duration()
        });
    }

    // 1st src: https://www.w3schools.com/html/mov_bbb.mp4
    // 2nd src: https://www.paypalobjects.com/webstatic/mktg/videos/PayPal_AustinSMB_baseline.mp4
    render() {
        return (
            <div>
                <p> Video </p>
                <button type="button">Get played range</button>               
                <div data-vjs-player>
                    <video ref={node => this.videoNode = node} className="video-js" controls >
                        <source src={this.props.src.src} type={this.props.src.type} />
                    </video>
                </div>
                { // video의 metadata가 load 된 이후에 rendering 실행
                    (this.state.startTime !== null) &&
                    <Chart startTime={this.state.startTime} endTime={this.state.endTime} duration={this.state.duration}/>
                }
            </div>
        );
    }
};
