import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoView from './VideoView';
import '../css/main.css';

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  handleFormSubmit = async (search) => {
    const getData = await youtube.get('/search', {
      params: {
        q: search
      }
    })

    const response = getData.data.items;
    this.setState({
      videos: response
    })

  }

  handleVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    });
  }

  render() {
    return ( 
      <div className="app">
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
        <VideoView video={this.state.selectedVideo} />
        {/* <span>Found: {this.state.videos.length} videos</span> */}
        <VideoList videos={this.state.videos} videoSelect={this.handleVideoSelect} />
      </div>
    )
  }
}

export default App;
