import React, { Component } from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';

class App extends Component {
  render() {
    return (
      <div className="App">
	  	  <VideoPlayer/>
      </div>
    );
  }
}

export default App;
