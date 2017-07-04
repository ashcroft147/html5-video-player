import React, { Component } from 'react';
import Highcharts from './highcharts.src';
import { usdeur } from './usdeur';

export default class BasicCharts extends Component {


    componentDidMount() {
        console.log('test');
        Highcharts.videoChart('chart-container', {
            navigator: {
                enabled: true
            },

            series: [{
                name: 'USD to EUR',
                data: usdeur
            }]
        });
    }

    render() {
        return (
            <div id='chart-container'>
                <h3>BasicCharts Component</h3>
            </div>
        )
    }
}