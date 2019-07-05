import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {

  state = {
    videos: [] 
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

  render() {
    return ( 
      <div className="app">
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
        {/* <span>Found: {this.state.videos.length} videos</span> */}
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;
