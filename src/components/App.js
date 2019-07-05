import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

  handleFormSubmit = (search) => {
    console.log(search);
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
