import React, { Component } from 'react';
import Highcharts from 'highcharts/highcharts.src';
import { usdeur } from './usdeur';

export default class Chart extends Component {

    constructor(props) {
        super(props)

        console.log("< Chart >")
        console.log(JSON.stringify(this.props));
    }

    componentDidMount() {
        Highcharts.videoChart('chart-container', {
            navigator: {
                enabled: true
            },

            series: [{
                name: 'USD to EUR',
                data: usdeur
            }]
            ,

            xAxis: {
                crosshair: true
            }
        });
    }

    render() {
        return (
            <div id='chart-container'>
                <h3>Chart Component</h3>
            </div>
        )
    }
}