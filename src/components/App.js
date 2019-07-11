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

  componentDidMount() {
    this.handleFormSubmit('hello');
  }


  handleFormSubmit = async (search) => {
    const getData = await youtube.get('/search', {
      params: {
        q: search
      }
    })

    const response = getData.data.items;
    this.setState({
      videos: response,
      selectedVideo: response[0]
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
        <div className="container">
          <div className="video-item-container">
            <VideoView video={this.state.selectedVideo} />
          </div>
          <div className="video-list-container">
            <VideoList videos={this.state.videos} videoSelect={this.handleVideoSelect} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
