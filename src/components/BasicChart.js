import React, { Component } from 'react';
import Highcharts from 'highcharts';

//export default class App extends Component {

export default class BasicCharts extends Component {

    componentDidMount() {
        console.log("Basic Chart Drawing Start");

        var chart = Highcharts.chart('chart-container', {
            series: [{
                data: [1, 3, 2, 4]
            }],
            // ... more options - see http://api.highcharts.com/highcharts
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