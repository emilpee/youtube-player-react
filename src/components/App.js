import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

  handleFormSubmit = () => {
    console.log('Hello');
  }

  render() {
    return (
      <div className="app">
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
      </div>
    )
  }
}

export default App;
